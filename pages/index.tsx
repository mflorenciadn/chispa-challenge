import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeView from "@components/Home";
import { HomeProps } from "@interfaces/home";
import AppLayout from "../layouts/App";

type Locale = "es" | "en";

type HomePageProps = {
  homeProps: HomeProps;
  locale: Locale;
};

const Home: NextPage<HomePageProps> = ({ homeProps }: HomePageProps) => (
  <div>
    <Head>
      <title>Nomad</title>
      <meta name="Home" content="Página de inicio de Nomad" />
      <link rel="icon" href="/nomad.svg" />
    </Head>
    <AppLayout navData={homeProps.navData}>
      <HomeView {...homeProps} />
    </AppLayout>
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const _navData = await (await fetch(`${process.env.NEXT_PUBLIC_API}/nav`)).json();
  const _homeData = await (await fetch(`${process.env.NEXT_PUBLIC_API}/home`)).json();
  const _footerData = await (
    await fetch(`${process.env.NEXT_PUBLIC_API}/footer`)
  ).json();

  const i18n = await serverSideTranslations(locale!);

  const _homeProps = {
    navData: _navData.data,
    homeData: _homeData.data,
    footerData: _footerData.data,
  };

  return {
    props: { homeProps: _homeProps, ...i18n },
  };
};

export default Home;

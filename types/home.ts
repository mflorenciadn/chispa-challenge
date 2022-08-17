import { FooterData } from "./footer";
import { ThumbnailData } from "./hotel";
import { NavItem } from "./nav";

export type HeroImage = {
    desktop: string,
    mobile: string
};

export type HeroSection = {
    title: string,
    message: string,
    image: HeroImage,
};

export type HomeData = {
    heroData: HeroSection[],
    hotelsData: ThumbnailData[],
};

export type HomeProps = {
    navData: NavItem[],
    homeData: HomeData,
    footerData: FooterData,
};


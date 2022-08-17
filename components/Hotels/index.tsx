import { useTranslation } from "next-i18next";
import { Box, Heading, Hide, Show } from "@chakra-ui/react";
import { ThumbnailData } from "@interfaces/hotel";
import CarouselDesktop from "./CarouselDesktop";
import ListMobile from "./ListMobile";

type HotelsProps = {
  data?: ThumbnailData[];
};

const Hotels = ({ data }: HotelsProps) => {
  const { t } = useTranslation(["home"]);

  return (
    <Box
      bgColor="#F4F4F4"
      bgSize={{ base: "100%", md: "75%" }}
      borderRadius={"1rem"}
      mr={{ base: "0", md: "25%" }}
      pb={{ base: "3.25rem", md: 10 }}
      pt={{ base: "6.25rem", md: "5rem" }}
    >
      <Box px={{ base: "1.5rem", md: "6rem", xl: "8rem" }} textAlign="left">
        <Heading
          as="h1"
          fontWeight="600"
          lineHeight="56px"
          mr="0.5rem"
          size={{ base: "3xl", md: "2xl", xl: "4xl" }}
        >
          {t("hotels.title")}
        </Heading>
        <Heading
          fontWeight="300"
          mb={{ base: "0rem", md: "3.5rem" }}
          mt={{ base: "2rem", md: "2.5rem" }}
          px="0"
          width={{ base: "101%", md: "80%", lg: "60%" }}
          lineHeight={{ base: "32px", xl: "40px" }}
          fontSize={{ base: "1.25rem", xl: "2.1rem" }}
        >
          {t("hotels.subtitle")}
        </Heading>
      </Box>
      <Show above="md">
        <CarouselDesktop data={data} />
      </Show>
      {/* TODO: refactor para que sea un solo componente */}
      <Hide above="md">
        <ListMobile data={data} />
      </Hide>
    </Box>
  );
};

export default Hotels;

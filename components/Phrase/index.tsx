import { Flex, Heading, Highlight } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Phrase = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Flex h="100vh" w="100vw" align="center" textAlign="center" p={{base: "1.5rem", md: "6rem", lg: "12rem", xl: "10rem"}}>
      <Heading size={"6xl"}>
        <Highlight
          query={["aventuras locales", "local adventures"]}
          styles={{
            bg: "brand",
            color: "white",
            fontWeight: "600",
            letterSpacing: "-0.5px",
            mx: "0.7rem",
            px: "4",
            py: "2",
          }}
        >
          {t("phrase")}
        </Highlight>
      </Heading>
    </Flex>
  );
};

export default Phrase;

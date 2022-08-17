import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  Box,
  Flex,
  Heading,
  Hide,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { HeroSection } from "@interfaces/home";

type HeroProps = {
  data?: HeroSection[];
};

const Hero = ({ data }: HeroProps) => {
  const { t } = useTranslation(["home"]);
  const [page, setPage] = useState(1);

  return (
    <Flex
      w="100vw"
      h="100vh"
      backgroundImage={{
        base: `/assets/images/hero/mobile${page + 1}.png`,
        md: `/assets/images/hero/desktop${page + 1}.png`,
      }}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      textAlign="left"
    >
      <Stack
        w={"100%"}
        justify={"end"}
        px={{ base: "1.5rem", md: "6rem" }}
        pb="7.25rem"
        background={{
          base: "linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))",
        }}
        style={{ wordWrap: "normal" }}
        spacing={{ base: "2rem" }}
      >
        <Stack
          align={"flex-start"}
          maxW={{ base: "90%", md: "48%", lg: "37%", xl: "30%", xxl: "40%" }}
          spacing={{ base: "6.75rem", md: "25%", xl:"35%"}}
        >
          <Heading color={"white"} size={"5xl"}>
            {t(`hero.sections.${page}.title`)}
          </Heading>
          <HStack
            maxW={{ base: "50%", lg: "45%" }}
            spacing={{ base: "1rem", md: "0.5rem", lg: "0.75rem" }}
            fontWeight="400"
            color={"#ffffff"}
          >
            {data?.map((_section: HeroSection, index: number) => (
              <Stack
                minW="75%"
                key={index}
                opacity="0.6"
                onClick={() => setPage(index)}
                fontSize={{
                  base: "1rem",
                  md: "0.9rem",
                  lg: "1rem",
                  xxl: "1.75rem",
                }}
                style={{ cursor: "pointer" }}
                _hover={{ opacity: "1" }}
              >
                <Text>{index + 1}</Text>
                <Hide below={"md"}>
                  <Text w="60%">{t(`hero.sections.${index}.subtitle`)}</Text>
                </Hide>
                <Box flexDirection={"row"} mt="1.5rem">
                  {page === index && (
                    <Box
                      w={{ base: "1.75rem", md: "70%" }}
                      h="2px"
                      bgGradient="linear(to-r, #ffffff 5%, #ffffff 45%, #ffffff40 55%, #ffffff40) 50%"
                    />
                  )}
                </Box>
              </Stack>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Hero;

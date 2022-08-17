import { useTranslation } from "next-i18next";
import {
  Box,
  Center,
  Flex,
  Heading,
  Hide,
  HStack,
  Img,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FooterData } from "@interfaces/footer";

type FooterProps = {
  data?: FooterData;
};

const Footer = ({ data }: FooterProps) => {
  const { t } = useTranslation(["footer"]);

  return (
    <Box as="footer">
      <Box py="5rem" px={{ base: "2rem", md: "6rem" }}>
        <Divider aria-hidden />
        <Flex
          align={"center"}
          direction={{ base: "column", md: "row" }}
          fontSize={{ lg: "1.1rem", xxl: "1.7rem" }}
          justify={{ base: "center", md: "space-betwwen" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box flex={{base: "1.2", xxl: "1"}}>
            <Box mb={8}>
              <Flex justify={{ base: "center", md: "left" }} align="center">
                <Img
                  alt="Nomad logo"
                  aria-hidden
                  src="/assets/images/logotype.png"
                  width={{base: "35%"}}
                />
              </Flex>
            </Box>
            <Text mb={"2rem"} mx={{ base: "1.25rem", md: "0rem" }}>
              {t("about")}
            </Text>
            <HStack
              gap={{ base: "-4rem", md: "2rem" }}
              justifyContent={{ base: "center", md: "left" }}
              mb={{ base: "4rem", md: 0 }}
              style={{ cursor: "pointer" }}
            >
              {data?.socialMedia.map((socialMedia, index) => (
                <SocialIcon
                  key={index}
                  src={socialMedia.icon}
                  w={{ base: "3rem", md: "1.4rem" }}
                />
              ))}
            </HStack>
          </Box>
          <Spacer />
          <Box flex={1} py={{ base: 6, md: 0 }}>
            <Heading
              as="h3"
              fontWeight={600}
              fontSize={{ base: "1.5rem", xxl: "2rem" }}
              mb={"1rem"}
            >
              {t("contact")}
            </Heading>
            <Text>T: {data?.contact?.telephone}</Text>
            <Text>E: {data?.contact?.email}</Text>
          </Box>
          <Spacer />
          <Hide below={"md"}>
            <Stack flex={0.8} py={0}>
              {data?.links?.map((link) => (
                <Link key={link.id} variant="footer" href={link.url}>
                  {t(`links.${link.id}`)}
                </Link>
              ))}
            </Stack>
          </Hide>
        </Flex>
      </Box>
      <Box
        bg="brand"
        color="white"
        fontSize={{ base: "3xl", md: "6xl" }}
        py={{ base: "1rem", md: "2rem", xxl: "4rem" }}
        fontWeight="300"
        h={{ base: "8rem", md: "10rem", xxl: "14rem" }}
        boxShadow="inset 0px 58px 36px -45px rgba(12, 42, 98, 0.5)"
      >
        <Center>
          <Text lineHeight={"6rem"}> {t("message")} :)</Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Footer;

const Divider = styled.div`
  margin-bottom: 5rem;
  height: 1px;
  background: rgb(61, 99, 169);
  background: linear-gradient(
    90deg,
    rgba(61, 99, 169, 1) 20%,
    rgba(173, 194, 47, 1) 20%,
    rgba(173, 194, 47, 1) 40%,
    rgba(170, 34, 117, 1) 40%,
    rgba(170, 34, 117, 1) 60%,
    rgba(23, 163, 171, 1) 60%,
    rgba(23, 163, 171, 1) 80%,
    rgba(255, 132, 41, 1) 80%
  );
`;

const SocialIcon = styled(Img)`
  transition: 0.4s;
  opacity: 0.99;
  height: 1.5rem;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
    transition: background-color 0.4s;
    opacity: 1;
    transform: translateY(-5px) scale(1.02);
  }
`;


import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DrawerData } from "@interfaces/hotel";

type HotelItemProps = {
  hotel: DrawerData;
};

const HotelItem = ({ hotel }: HotelItemProps) => (
  <>
    <Divider opacity="0.7" />
    <Flex direction={{ base: "column", md: "row" }} my="2rem">
      <Box
        borderRadius="8px"
        h={{ base: "15rem", md: "15.5rem" }}
        w={{ base: "100%", md: "14.5rem" }}
        backgroundImage={hotel.image}
        backgroundSize="cover"
        backgroundPosition="100% 40%"
        aria-hidden
      ></Box>
      <Stack
        as={"div"}
        w={{ base: "100%", md: "55%" }}
        ml={{ md: "1.25rem" }}
        spacing={{ base: "1rem", md: "0.75rem" }}
        justifyContent="start"
        letterSpacing="1px"
      >
        <Img
          p={{ base: "0rem", md: "0rem" }}
          h={{ base: "2.25rem", md: "2rem" }}
          maxW={{ base: "40%", md: "30%" }}
          mt={{ base: "1.5rem", md: "0" }}
          src={hotel.titleImage}
          alignSelf="start"
          aria-label={hotel.title}
        />
        <Heading
          as={"h3"}
          lineHeight={"24px"}
          variant="drawer"
          fontSize={{ base: "1rem", md: "0.9rem" }}
          fontWeight={"400"}
        >
          {hotel.description}
        </Heading>
        <Heading
          as="p"
          lineHeight="24px"
          fontSize={{ base: "0.9rem", md: "0.8rem" }}
          fontWeight="300"
          color="grey"
        >
          {hotel.services}
        </Heading>
        <HStack fontSize={{ base: "1.1rem", md: "0.9rem" }}>
          <Text fontWeight="300" color="grey">
            Desde
          </Text>
          <Text
            color="black"
            letterSpacing="0"
            fontWeight="700"
          >{`${hotel.price}/Noche`}</Text>
        </HStack>
        <Button
          bgColor="brand"
          color="white"
          my="2rem"
          w={{ base: "100%", md: "40%" }}
        >
          Reservar ahora
        </Button>
      </Stack>
    </Flex>
  </>
);

export default HotelItem;

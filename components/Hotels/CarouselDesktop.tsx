import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ThumbnailData } from "@interfaces/hotel";

type CarouselDesktopProps = {
  data?: ThumbnailData[];
};

const CarouselDesktop = ({ data }: CarouselDesktopProps) => {
  const [cardHovered, setCardHovered] = useState<number | null>(null);

  return (
    <Flex
      direction="row"
      pl={{ md: "6rem", xxl: "8rem" }}
      maxW="100vw"
      minW="100vw"
    >
      <Swiper
        breakpoints={{
          960: {
            slidesPerView: 1.2,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 1.3,
          },
          1200: {
            slidesPerView: 1.5,
          },
          1440: {
            slidesPerView: 1.8,
            spaceBetween: 0,
          },
          1600: {
            slidesPerView: 2.1,
          },
          1920: {
            slidesPerView: 2.4,
          },
          2260: {
            slidesPerView: 1.9,
            spaceBetween: 20,
          },
        }}
        slidesPerGroup={1}
        grabCursor={true}
        freeMode={true}
        longSwipesMs={900}
        touchReleaseOnEdges={true}
        speed={400}
      >
        {data?.map((hotel: ThumbnailData, index: number) => (
          <SwiperSlide key={index}>
            <Box
              bgImage={hotel.image}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              borderRadius="16px"
              h={{ md: "27rem", xxl: "40rem" }}
              maxW="100%"
              textAlign={"left"}
              w={{ md: "40rem", xxl: "70rem" }}
            >
              <BoxDetail
                background={hotel.backgroundColor}
                onMouseOut={() => setCardHovered(null)}
                onMouseOver={() => setCardHovered(index)}
              >
                <HStack>
                  <Img p={{md: "0.25rem 0", xxl:"0"}} src="/assets/icons/ic_map.svg" />
                  <Text fontSize="1.1rem" letterSpacing="1px">
                    {hotel.location}
                  </Text>
                </HStack>
                <Img p={{md: "0.5rem 0", xxl: "1rem 0"}} src={hotel.titleImage} />
                {index === cardHovered && (
                  <Stack p={{md: "1rem 0", xxl: "0.25rem 0"}}>
                    <Text
                      fontSize={{ base: "0.85rem", xxl: "1.3rem" }}
                      letterSpacing="0.9px"
                      lineHeight="24px"
                      pb="0.5rem"
                    >
                      {hotel.description}
                    </Text>
                    <Box
                      background={hotel.backgroundColor}
                      height="2px"
                      my="5%"
                      w="100%"
                    ></Box>
                    <Stack>
                      <Text fontSize="0.8rem" pt="0.5rem" letterSpacing="1px">
                        Servicios de este hotel
                      </Text>
                      <HStack>
                        {hotel.services.map((service: string, index: number) => (
                          <Img key={index} pb="0.25rem" src={`${service}`} />
                        ))}
                      </HStack>
                    </Stack>
                  </Stack>
                )}
              </BoxDetail>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default CarouselDesktop;

const BoxDetail = styled(Box)`
  position: absolute;
  width: 22.75rem;
  height: 8.25rem;
  left: 18.75rem;
  top: 16rem;
  color: white;
  align-content: center;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0px 12px 32px 0px #00000040;
  transition: all 0.6s;

  :hover {
    backdrop-filter: blur(20px);
    background: rgba(43, 43, 43, 0.7);
    height: 18.5rem;
    top: 6rem;
    transition: all 0.6s;
  }

  @media (min-width: 2160px) {
    width: 40.75rem;
    height: 14.25rem;
    left: 34.75rem;
    top: 24rem;
    color: white;
    align-content: center;
    padding: 2.5rem;
    font-size: 3rem;

    :hover {
      backdrop-filter: blur(20px);
      background: rgba(43, 43, 43, 0.7);
      height: 19.5rem;
      top: 18rem;
      transition: all 0.6s;
    }
  }
`;

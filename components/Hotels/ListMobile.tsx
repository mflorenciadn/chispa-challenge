import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ThumbnailData } from "@interfaces/hotel";

type ListMobileProps = {
  data?: ThumbnailData[];
};

const ListMobile = ({ data }: ListMobileProps) => (
  <Flex
    direction="column"
    px="1.5rem"
    py="3rem"
    textAlign="center"
    style={{
      maxWidth: "100%",
      overflow: "hidden",
    }}
    gap="4rem"
  >
    {data?.map((hotel: ThumbnailData, index: number) => (
      <Box
        key={index}
        bgImage={hotel.image}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="25rem"
        minW="100%"
        borderRadius="16px"
        boxShadow="0px 12px 32px 0px #00000040"
      >
        <BoxDetail background={hotel.backgroundColor}>
          <HStack my="0.5rem">
            <Img p="0.25rem 0rem 0.25rem 1rem" src="/assets/icons/ic_map.svg" />
            <Text fontSize="1rem" letterSpacing="1px">
              {hotel.location}
            </Text>
          </HStack>
          <Img p="0rem 0.5rem 1rem 1rem" src={hotel.titleImage} />
        </BoxDetail>
      </Box>
    ))}
  </Flex>
);

export default ListMobile;

const BoxDetail = styled(Box)`
  position: relative;
  top: calc(100% - 8rem);
  left: 1rem;
  bottom: 1rem;
  width: calc(100% - 2rem);
  color: white;
  height: 7.25rem;
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: 0px 12px 32px 0px #00000040;
`;

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import HotelItem from "./Hotel";
import { DrawerData } from "@interfaces/hotel";

type AvailabilityProps = {
  hotels: DrawerData[] | undefined;
  isOpenDrawer: boolean;
  onCloseDrawer: () => void;
};

const Availability = ({
  hotels,
  isOpenDrawer,
  onCloseDrawer,
}: AvailabilityProps) => (
  <Drawer
    isOpen={isOpenDrawer}
    onClose={() => onCloseDrawer}
    allowPinchZoom
    size={{ base: "full", md: "lg" }}
  >
    <DrawerOverlay />
    <DrawerContent padding={{ md: "0rem 1rem" }}>
      <DrawerCloseButton onClick={onCloseDrawer} />
      <DrawerHeader>
        <Heading size="2xl" fontWeight="600" as="h1" py={{ md: "0rem" }}>
          Reservar
        </Heading>
      </DrawerHeader>
      <DrawerBody p={{ md: "0rem 1rem" }}>
        {hotels === undefined ? (
          <Loader />
        ) : (
          hotels.map((hotel: DrawerData, index: number) => (
            <HotelItem key={index} hotel={hotel} />
          ))
        )}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Availability;

const Loader = styled.div`
  border: 0 solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 40%;
  width: 100px;
  height: 100px;

  ::before,
  ::after {
    content: "";
    border: 7px solid #3d63a9;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    animation: load 2s linear infinite;
    opacity: 0;
  }

  ::before {
    animation-delay: 1s;
  }

  @keyframes load {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

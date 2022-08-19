import { useState } from "react";
import {
  Button,
  Flex,
  Hide,
  Img,
  Link,
  Show,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "./Desktop";
import MobileNav from "./Mobile";
import Availability from "../Availability";
import { useScrollDirection } from "@hooks/useScroll";
import { NavItem } from "@interfaces/nav";

type NavbarProps = {
  data: NavItem[];
};

//TODO: Refactor para juntar en un componente los dos navbar
const Navbar = ({ data }: NavbarProps) => {
  const { scrollDirection, scrollY } = useScrollDirection();
  const { isOpen, onToggle } = useDisclosure();
  const [dataHotels, setDataHotels] = useState();

  const onClickReserve = async () => {
    onToggle();
    const dataHotels = await (
      await fetch(`http://localhost:3000/api/hotels/availability`)
    ).json();
    setDataHotels(dataHotels.data);
  };

  return (
    <>
      <Slide
        direction="top"
        in={scrollDirection === "down" || scrollY === 0}
        style={{ zIndex: 10 }}
      >
        <Flex
          as="nav"
          justifyContent="space-between"
          h={{ base: "2rem", md: "4rem", xxl: "8rem" }}
          align="center"
          justify="space-between"
          minWidth="100%"
          p={{ base: "5rem 1.5rem", md: "4rem 6rem", xxl: "6rem" }}
        >
          <Flex justify="start">
            <Link
              bg="#FFFFFF"
              href="/"
              _active={{ transform: "scale(0.9)", backgroundColor: "white" }}
              _focus={{ background: "white" }}
              _hover={{ background: "white", opacity: "0.9" }}
              p={{
                base: "1.1rem 1rem",
                xs: "1.1rem",
                md: "1.45rem",
                lg: "1.5rem 1.5rem",
                xxl: "2.5rem 3rem",
              }}
              borderRadius={{ base: "8px", md: "16px" }}
              style={{ justifyContent: "center" }}
              boxShadow={"0px 12px 32px 0px #00000040"}
              minW="8%"
              aria-label="Ir a página de inicio"
            >
              <Img
                src="/assets/images/logotype.png"
                height={{
                  base: "12px",
                  xs: "13px",
                  md: "16px",
                  lg: "16px",
                  xxl: "24px",
                }}
                aria-hidden
              />
            </Link>
          </Flex>
          <Flex>
            <Show above="md">
              <DesktopNav data={data} onClickReserve={onClickReserve} />
            </Show>
          </Flex>
          <Hide above="md">
            <MobileNav data={data} onClickReserve={onClickReserve} />
          </Hide>
        </Flex>
      </Slide>
      <Availability
        hotels={dataHotels}
        isOpenDrawer={isOpen}
        onCloseDrawer={onToggle}
      />
    </>
  );
};

export default Navbar;

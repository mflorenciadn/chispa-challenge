import { useTranslation } from "next-i18next";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HStack,
  IconButton,
  Img,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { NavItem as NavItemType } from "@interfaces/nav";

type NavMenuProps = {
  isOpenMenu: boolean;
  onCloseDrawer: () => void;
  items: NavItemType[];
};

const NavMenu = ({ isOpenMenu, onCloseDrawer, items }: NavMenuProps) => {
  const { t } = useTranslation(["navbar"]);
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherPath = locales?.find((locale: string) => locale !== activeLocale);

  return (
    <Drawer
      isOpen={isOpenMenu}
      placement={"bottom"}
      onClose={() => onCloseDrawer}
      size="full"
    >
      <DrawerContent px="0.75rem">
        <DrawerCloseButton onClick={onCloseDrawer} padding="4rem 2rem" />
        <DrawerHeader>
          <IconButton
            aria-label="Ir a página de inicio"
            bg="#FFFFFF"
            borderRadius="8px"
            mt="2rem"
            icon={
              <Img
                src="/assets/images/logotype.png"
                height="14px"
                aria-hidden
              />
            }
          />
        </DrawerHeader>
        <DrawerBody minH="70vh">
          <Stack>
            {items.map((navItem: NavItemType, index) => (
              <NavItem key={index} {...navItem} />
            ))}
          </Stack>
          <Link
            href={`/${otherPath}`}
            p="0.75rem 1.5rem"
            style={{ letterSpacing: "0.4px" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent" }}
            _focus={{ background: "transparent" }}
            fontSize="1.1rem"
            fontWeight="400"
            justifyContent="left"
            color="black"
            pl="-1.5rem"
            py="2rem"
            w="100%"
          >
            <HStack py="0.75rem">
              <Img
                src="/assets/icons/ic_globe.svg"
                pl="-0.1rem"
                aria-hidden
                mr="0.5rem"
              />
              <p color="black">{t(`buttons.${otherPath}`)}</p>
            </HStack>
          </Link>
          <DrawerFooter minH="11vh">
            <Button
              bgColor="brand"
              color="white"
              w="85%"
              leftIcon={
                <Img
                  src="/assets/icons/ic_calendar.svg"
                  alt="calendario"
                  aria-hidden
                />
              }
              py="1.75rem !important"
              style={{ position: "absolute", bottom: 20, left: "2rem" }}
            >
              {t("buttons.reserve")}
            </Button>
          </DrawerFooter>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default NavMenu;

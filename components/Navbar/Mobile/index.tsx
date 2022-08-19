import {
  Button,
  HStack,
  IconButton,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import { NavItem } from "@interfaces/nav";
import { useTranslation } from "next-i18next";
import NavMenu from "./NavMenu";

type MobileNavProps = {
  data: NavItem[];
  onClickReserve: () => void;
};

const MobileNav = ({ onClickReserve, data }: MobileNavProps) => {
  const { t } = useTranslation(["navbar"]);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack justify="flex-end" spacing={3}>
        <Button
          boxShadow="0px 12px 32px 0px #00000040"
          onClick={onClickReserve}
          leftIcon={
            <Img
              src="/assets/icons/ic_calendar_blue.svg"
              alt="calendario"
              aria-hidden
            />
          }
        >
          {t("buttons.reserve")}
        </Button>
        <IconButton
          boxShadow="0px 12px 32px 0px #00000040"
          icon={<Img src="/assets/icons/ic_burger.svg" aria-hidden />}
          onClick={onToggle}
          aria-label="Abrir menú"
        />
      </HStack>
      <NavMenu isOpenMenu={isOpen} onCloseDrawer={onToggle} items={data} />
    </>
  );
};

export default MobileNav;

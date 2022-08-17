import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Box, Button, Divider, HStack, Img, Link } from "@chakra-ui/react";
import DesktopNavItem from "./NavItem";
import { NavItem } from "@interfaces/nav";

type DesktopNavProps = {
  data?: NavItem[];
  onClickReserve: () => void;
};

const DesktopNav = ({ data, onClickReserve }: DesktopNavProps) => {
  const { t } = useTranslation(["navbar"]);
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherPath = locales?.find((locale: string) => locale !== activeLocale);

  return (
    <Box
      bg="white"
      h={{ md: "4rem", xxl: "6rem" }}
      p={{ md: "0.5rem 1rem", lg: "1.25rem 1rem", xxl: "3.5rem 2rem" }}
      style={{ borderRadius: "16px", justifyContent: "space-between" }}
      boxShadow={"0px 12px 32px 0px #00000040"}
      minW="100%"
      display={{ base: "none", md: "flex" }}
    >
      <HStack>
        {data?.map((navItem: NavItem) => (
          <DesktopNavItem key={navItem.id} {...navItem} />
        ))}
        <HStack h="1.75rem">
          <Divider orientation="vertical" color="black" />
        </HStack>
        <Link
          href={`/${otherPath}`}
          p={"0.75rem 1.5rem"}
          style={{ letterSpacing: "0.4px" }}
        >
          {t(`buttons.${otherPath}`)}
        </Link>
        <Button
          onClick={onClickReserve}
          leftIcon={
            <Img
              src="/assets/icons/ic_calendar.svg"
              alt="calendario"
              aria-hidden
            />
          }
        >
          {t("buttons.reserve")}
        </Button>
      </HStack>
    </Box>
  );
};

export default DesktopNav;

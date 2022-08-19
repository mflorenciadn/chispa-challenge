import { useTranslation } from "next-i18next";
import { Box, Link, Text } from "@chakra-ui/react";
import { NavItem } from "@interfaces/nav";

const DesktopSubItem = (subItem: NavItem) => {
  const { t } = useTranslation(["navbar"]);

  return (
    <Link
      role="group"
      href={subItem.href}
      display="flex"
      p="0.75rem 1.5rem"
      borderRadius="0.5rem"
      justifyContent="center"
      textAlign="center"
    >
      <Box style={{ letterSpacing: "0.4px" }}>
        <Text transition="all .3s ease">{t(`dropdown.${subItem.id}`)}</Text>
      </Box>
    </Link>
  );
};

export default DesktopSubItem;

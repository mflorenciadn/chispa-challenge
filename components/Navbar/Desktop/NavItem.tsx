import { useTranslation } from "next-i18next";
import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import DesktopSubItem from "./SubItem";
import { NavItem } from "@interfaces/nav";

const DesktopNavItem = (navItem: NavItem) => {
  const { t } = useTranslation(["navbar"]);
  return (
    <Box>
      <Popover
        trigger={"hover"}
        placement="bottom"
        gutter={30}
        isLazy
        preventOverflow
        styleConfig={{
          maxWidht: "max-content",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <PopoverTrigger>
          <Link style={{ letterSpacing: "0.4px" }} href={navItem.href}>
            {t(`links.${navItem.id}`)}
          </Link>
        </PopoverTrigger>
        {navItem.subItems && (
          <PopoverContent boxShadow="xl" rounded="xl" bg="white" p="0.75rem">
            <Stack>
              {navItem.subItems.map((subItem: NavItem) => (
                <DesktopSubItem key={subItem.id} {...subItem} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

export default DesktopNavItem;

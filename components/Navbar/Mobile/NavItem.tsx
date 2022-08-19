import { useTranslation } from "next-i18next";
import {
  Box,
  Collapse,
  Divider,
  Heading,
  HStack,
  IconButton,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import { NavItem } from "@interfaces/nav";

const NavItem = (item: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation(["navbar"]);

  return (
    <>
      <HStack justify="space-between">
        <Heading
          fontSize="2rem"
          lineHeight="32px"
          fontWeight="600"
          py="0.75rem"
          onClick={onToggle}
        >
          {t(`links.${item.id}`)}
        </Heading>
        {item.subItems && (
          <IconButton
            icon={
              <Img
                src={
                  isOpen
                    ? "/assets/icons/ic_less.svg"
                    : "/assets/icons/ic_chevron_down.svg"
                }
                aria-hidden
              />
            }
            onClick={onToggle}
            _active={{ background: "transparent" }}
            aria-label="Abrir menú"
            variant="ghost"
          />
        )}
      </HStack>
      <>
        {item.subItems && (
          <Collapse in={isOpen} animateOpacity>
            <Box>
              {item.subItems.map((subItem: NavItem) => (
                <Box pl="2rem" key={subItem.id}>
                  <Heading fontSize="2rem" fontWeight="600" py="0.5rem">
                    {t(`dropdown.${subItem.id}`)}
                  </Heading>
                </Box>
              ))}
            </Box>
          </Collapse>
        )}
      </>
      <Divider colorScheme="#f4f4f4" />
    </>
  );
};

export default NavItem;

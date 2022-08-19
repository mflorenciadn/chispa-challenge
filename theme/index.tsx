import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: "#3D63A9",
    hover: "#3D63A930",
    active: "##3D63A990",
    black: "#2B2B2B",
    grey: "#676767",
  },
  breakpoints: {
    xs: "21rem",
    sm: "30rem",
    md: "60rem",
    lg: "75rem",
    xl: "100rem",
    xxl: "135rem",
  },
  fonts: {
    heading: `Gibson, sans-serif`,
    body: `'Gibson', sans-serif`,
    variants: {
      "heading-light": {
        fontSize: "2xl",
        letterSpacing: "-0.04em",
      },
    },
  },
  components: {
    Divider: {
      baseStyle: {
        color: "#F4F4F4F4",
        opacity: "1",
        height: "1px",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Gibson",
      },
      variants: {
        "heading-light": {
          fontSize: "2xl",
          letterSpacing: "-0.04em",
        },
      },
      sizes: {
        "5xl": {
          fontSize: {
            base: "3.25rem",
            xs: "4rem",
            md: "5.25rem",
            lg: "6.25rem",
            xl: "7rem",
            xxl: "12rem",
          },
          lineHeight: {
            base: "68px",
            md: "90px",
            lg: "110px",
            xxl: "180px",
          },
          fontWeight: "700",
        },
        "6xl": {
          fontSize: {
            base: "1.75rem",
            xs: "2.25rem",
            md: "4.5rem",
            lg: "4.75rem",
            xxl: "6rem",
          },
          fontWeight: "300",
          letterSpacing: {
            base: "-0.02em",
            md: "-0.15rem",
            xxl: "-0.2rem",
          },
          lineHeight: {
            base: "56px",
            md: "98px",
            xxl: "130px",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        p: {
          md: "1rem",
          lg: "1rem",
          xxl: "2.5rem",
        },
        rounded: "md",
        backgroundColor: "none",
        transition: "0.5s",
        fontSize: {
          md: "0.9rem",
          lg: "1rem",
          xxl: "1.75rem",
        },
        _hover: {
          backgroundColor: "hover",
          textDecoration: "none",
          transition: "0.5s",
        },
        _active: {
          textDecoration: "none",
          transform: "scale(0.95)",
          backdropFilter: "blur(20px)",
        },
        _focus: {
          backgroundColor: `#3D63A990`,
        },
      },
      variants: {
        footer: {
          p: "0",
          _hover: {
            color: "brand",
            transform: "translateX(3%) scale(1.1)",
            textDecoration: "underline",
            backgroundColor: "none",
          },
          _active: {
            color: "brand",
            textDecoration: "underline",
            transform: "scale(0.95)",
            backgroundColor: "none",
          },
          _focus: {
            backgroundColor: "transparent",
          },
        },
      },
    },
    Button: {
      variants: {
        default: {
          bg: { base: "white", md: "brand" },
          color: { base: "brand", md: "white" },
          fontSize: {
            base: "0.8rem",
            xs: "0.9rem",
            lg: "1rem",
            xxl: "1.75rem",
          },
          fontWeight: "600",
          borderRadius: "8px",
          lineHeight: "24px",
          p: {
            base: "0.5rem",
            xs: "0.75rem",
            md: "0.75rem 1rem",
            lg: "1.1rem",
            xxl: "2.5rem",
          },
          textAlign: "center",
          alignItems: "center",
          _hover: {
            filter: "brightness(0.9)",
            backdropFilter: "blur(20px)",
          },
          _active: {
            transform: "scale(0.95)",
            backdropFilter: "blur(20px)",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "default",
        colorScheme: "brand",
      },
    },
    MenuButton: {
      variants: {
        default: {
          _hover: {
            backgroundColor: "white",
            filter: "brightness(0.9)",
            backdropFilter: "blur(20px)",
          },
          _active: {
            backgroundColor: "white",

            transform: "scale(0.95)",
            backdropFilter: "blur(20px)",
          },
        },
      },
      defaultProps: {
        variant: "default",
      },
    },
  },
});

export default theme;

import { deepmerge } from "@mui/utils";
import { createTheme, ThemeOptions } from "@mui/material/styles";

// grabbed from Giphy's website
const giphyGradient =
  "linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%)";

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "transparent",
        position: "static",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          paddingRight: 0,
        },
        input: {
          boxShadow:
            "inset 1px -1px 0 #707070, inset 0 1px 0 #707070, inset 0 -1px 0 #707070",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          backgroundImage: giphyGradient,
          borderRadius: 0,
          display: "block",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          backgroundImage: giphyGradient,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          textDecoration: "underline",
        },
        textPrimary: {
          textTransform: "none",
        },
      },
    },
  },
};

const themeDarkOverrides: ThemeOptions = {
  palette: {
    background: {
      default: "#000000",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
        body2: {
          color: "#B2B2B2",
        },
        h1: {
          fontSize: "1.75rem",
          textTransform: "uppercase",
          fontWeight: "900",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: "#00CCFF",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
};

const themeLightOverrides: ThemeOptions = {
  palette: {
    background: {
      default: "#F2F2F2",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          color: "#707070",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: "#FFFFFF",
        },
      },
    },
  },
};

export const themeDark = createTheme(deepmerge(baseTheme, themeDarkOverrides));
export const themeLight = createTheme(
  deepmerge(baseTheme, themeLightOverrides)
);

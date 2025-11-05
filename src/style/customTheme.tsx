import { createTheme } from "@mui/material";
import bgImg from "@/assets/bg.png";

const COLORS = {
  PRIMARY: {
    LIGHT: "hsl(221 49% 33%)",
    DARK: "hsl(220 78% 76%)",
  },
  SUCCESS: {
    LIGHT: "hsl(149 70% 34%)",
    DARK: "hsl(147 24% 57%)",
  },
  ERROR: {
    LIGHT: "hsl(9 58% 41%)",
    DARK: "hsl(9 37% 65%)",
  },
  BACKGROUND: {
    LIGHT: "hsl(220, 89%, 92%)",
    DARK: "hsl(231 91% 3%)",
  },
  CONTAINERBACKGROUND: {
    LIGHT: "hsl(220, 100%, 97%)",
    DARK: "hsl(223 70% 6%)",
  },
  BORDER: {
    LIGHT: "hsl(220 39% 66%)",
    DARK: "hsl(221 35% 32%)",
  },
};

let customTheme = createTheme({
  spacing: 8,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: COLORS.PRIMARY.LIGHT,
          dark: COLORS.CONTAINERBACKGROUND.DARK,
          contrastText: COLORS.CONTAINERBACKGROUND.LIGHT,
        },
        success: {
          main: COLORS.SUCCESS.LIGHT,
        },
        error: {
          main: COLORS.ERROR.LIGHT,
        },
        background: {
          default: COLORS.BACKGROUND.LIGHT,
        },
        containerBackground: {
          main: COLORS.CONTAINERBACKGROUND.LIGHT,
        },
        border: {
          main: COLORS.BORDER.LIGHT,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: COLORS.PRIMARY.DARK,
          dark: COLORS.CONTAINERBACKGROUND.LIGHT,
          contrastText: COLORS.CONTAINERBACKGROUND.DARK,
        },
        success: {
          main: COLORS.SUCCESS.DARK,
        },
        error: {
          main: COLORS.ERROR.DARK,
        },
        background: {
          default: COLORS.BACKGROUND.DARK,
        },
        containerBackground: {
          main: COLORS.CONTAINERBACKGROUND.DARK,
        },
        border: {
          main: COLORS.BORDER.DARK,
        },
      },
    },
  },

  typography: {
    fontFamily: ["Montserrat Variable", "sans-serif"].join(","),
    body1: {
      fontSize: "1rem",
    },

    body2: {
      fontSize: "0.875rem",
    },

    h1: {
      fontSize: "2.4rem",
      letterSpacing: "-0.1rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h2: {
      fontSize: "1.6rem",
      letterSpacing: "-0.1rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h3: {
      fontSize: "1.2rem",
      letterSpacing: "0.10rem",
      fontWeight: 600,
      textAlign: "center",
    },
  },
});

// Components and Breakpoints for text
customTheme = createTheme(customTheme, {
  typography: {
    body1: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },

    body2: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
    },

    h1: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    h2: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "1.75rem",
      },
    },

    h3: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },

    h4: {
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "16px",
          lineHeight: 1.5,
          height: "100%",
          backgroundColor: `${customTheme.palette.background}`,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: `${2640 / 1.375}px auto`,
          "@keyframes bgAnim": {
            "0%": {
              backgroundPosition: "left 0 top 0",
            },
            "100%": {
              backgroundPosition: `left ${2640 / 1.375}px top ${992 / 1.375}px`,
            },
          },
          animation: "bgAnim 40s infinite linear",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: customTheme.spacing(2),
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: customTheme.spacing(2),
          margin: "0 auto",
        },
      },
    },
  },
});

export default customTheme;

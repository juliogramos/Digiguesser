import { createTheme } from "@mui/material";
import bgImg from "@/assets/bg.png";

const defaultSpacing = 8;

let defaultTheme = createTheme({
  spacing: defaultSpacing,
  palette: {
    primary: {
      main: "#1251d0",
    },
    secondary: {
      main: "#2e74c9",
    },
    success: {
      main: "#009900",
    },
    fail: {
      main: "#990000",
    },
    bodyBackground: {
      main: "#d3dbff",
    },
    boxBackground: {
      main: "#fff",
    },
    disabled: {
      main: "#e0e0e0",
    },
    gold: {
      main: "#d3af37",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },
    h1: {
      fontSize: "2.4rem",
      letterSpacing: "0.50rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h2: {
      fontSize: "2rem",
      letterSpacing: "0.30rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h3: {
      fontSize: "1.6rem",
      letterSpacing: "0.10rem",
      fontWeight: 600,
      textAlign: "center",
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 600,
      textAlign: "center",
    },
  },
});

// Components and Breakpoints for text
defaultTheme = createTheme(defaultTheme, {
  typography: {
    body1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },

    h1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },

    h2: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.75rem",
      },
    },

    h3: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },

    h4: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          background: `${defaultTheme.palette.bodyBackground.main} url(${bgImg}) repeat left top`,
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
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: defaultTheme.spacing(2),
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          p: defaultTheme.spacing(1),
          margin: "0 auto",
        },
      },
    },

    MuiChip: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 500,
          letterSpacing: "0.05rem",
          backgroundColor: defaultTheme.palette.disabled.main,
          color: "black",
        },
      },
    },
  },
});

export default defaultTheme;

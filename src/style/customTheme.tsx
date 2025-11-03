import { createTheme } from "@mui/material";
import bgImg from "@/assets/bg.png";

let customTheme = createTheme({
  spacing: 8,
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
    error: {
      main: "#990000",
    },
    background: {
      default: "#d3dbff",
    },
  },
  typography: {
    fontFamily: ["Montserrat Variable", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },

    body2: {
      fontSize: "1rem",
      fontWeight: 500,
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
        html: {
          height: "100%",
        },
        body: {
          fontSize: "16px",
          lineHeight: 1.5,
          height: "100%",
          background: `${customTheme.palette.background.default} url(${bgImg}) repeat left top`,
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

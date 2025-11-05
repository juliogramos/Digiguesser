import "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    border: Palette["primary"];
    containerBackground: Palette["primary"];
  }

  interface PaletteOptions {
    border?: PaletteOptions["primary"];
    containerBackground?: PaletteOptions["primary"];
  }
}

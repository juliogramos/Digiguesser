// Types
export type GameState = "standby" | "evaluating" | "win" | "loss";

// Constants
export const BASEURL = `https://digi-api.com/api/v1/digimon/`;

export const MAXDIGIMON = 1488; //According to a query to DAPI

export const ICONSIZE = {
  HEIGHT: 32,
  WIDTH: 32,
} as const;

export const DIGIMONIMAGESIZE = {
  WIDTH: 320,
  HEIGHT: 320,
  SMALLWIDTH: 250,
  SMALLHEIGHT: 250,
} as const;

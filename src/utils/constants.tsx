// Images
import imgBaby from "@/assets/button_baby.webp";
import imgChild from "@/assets/button_child.webp";
import imgAdult from "@/assets/button_adult.webp";
import imgPerfect from "@/assets/button_perfect.webp";
import imgUltimate from "@/assets/button_ultimate.webp";
import imgOther from "@/assets/button_other.webp";

// Types
export type GameState = "standby" | "evaluating" | "win" | "loss";
export type Level =
  | "Baby"
  | "Child"
  | "Adult"
  | "Perfect"
  | "Ultimate"
  | "Other";
export type ButtonStatus = "winner" | "loser" | "normal";
export interface LevelGuesserResults {
  winners: Level[];
  loser: Level | null;
}

interface LevelValue {
  ID: number;
  LABEL: string;
  ALT: string;
  VALUES: string[];
  IMG: string;
}

type LevelValueObject = {
  [key in Level]: LevelValue;
};

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

export const LEVELVALUES: LevelValueObject = {
  Baby: {
    ID: 0,
    LABEL: "Baby",
    ALT: "In-Training",
    VALUES: ["Baby I", "Baby II"],
    IMG: imgBaby,
  },
  Child: {
    ID: 1,
    LABEL: "Child",
    ALT: "Rookie",
    VALUES: ["Child"],
    IMG: imgChild,
  },
  Adult: {
    ID: 2,
    LABEL: "Adult",
    ALT: "Champion",
    VALUES: ["Adult"],
    IMG: imgAdult,
  },
  Perfect: {
    ID: 3,
    LABEL: "Perfect",
    ALT: "Ultimate",
    VALUES: ["Perfect"],
    IMG: imgPerfect,
  },
  Ultimate: {
    ID: 4,
    LABEL: "Ultimate",
    ALT: "Mega",
    VALUES: ["Ultimate"],
    IMG: imgUltimate,
  },
  Other: {
    ID: 5,
    LABEL: "Other",
    ALT: "Other",
    VALUES: ["Armor", "Unknown", "Hybrid"],
    IMG: imgOther,
  },
} as const;

export const LOADTIMES = {
  LEVELGUESSER: 3,
} as const;

export const DEFAULTRESULTS: LevelGuesserResults = {
  winners: [],
  loser: null,
} as const;

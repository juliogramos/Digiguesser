import imgBaby from "@/assets/button_baby.webp";
import imgChild from "@/assets/button_child.webp";
import imgAdult from "@/assets/button_adult.webp";
import imgPerfect from "@/assets/button_perfect.webp";
import imgUltimate from "@/assets/button_ultimate.webp";
import imgOther from "@/assets/button_other.webp";

export const BASEURL = `https://digi-api.com/api/v1/digimon/`;

export const MAXDIGIMON = 1488; //According to a query to DAPI

export const DEFAULTDIGIMONSTATUS = Object.freeze({
  standby: true,
  loading: false,
  error: false,
  success: false,
});

export const LEVELS = Object.freeze({
  BABY: {
    ID: 0,
    LABEL: "Baby",
    ALT: "In-Training",
    VALUES: ["Baby I", "Baby II"],
    IMG: imgBaby,
  },
  CHILD: {
    ID: 1,
    LABEL: "Child",
    ALT: "Rookie",
    VALUES: ["Child"],
    IMG: imgChild,
  },
  ADULT: {
    ID: 2,
    LABEL: "Adult",
    ALT: "Champion",
    VALUES: ["Adult"],
    IMG: imgAdult,
  },
  PERFECT: {
    ID: 3,
    LABEL: "Perfect",
    ALT: "Ultimate",
    VALUES: ["Perfect"],
    IMG: imgPerfect,
  },
  ULTIMATE: {
    ID: 4,
    LABEL: "Ultimate",
    ALT: "Mega",
    VALUES: ["Ultimate"],
    IMG: imgUltimate,
  },
  OTHER: {
    ID: 5,
    LABEL: "Other",
    ALT: "Other",
    VALUES: ["Armor", "Unknown", "Hybrid"],
    IMG: imgOther,
  },
});

export const GAMESTATE = Object.freeze({
  STANDBY: "standby",
  EVALUATING: "evaluating",
  WIN: "win",
  LOSS: "loss",
});

export const DIGIMONIMAGESIZE = Object.freeze({
  WIDTH: 320,
  HEIGHT: 320,
  SMALLWIDTH: 250,
  SMALLHEIGHT: 250,
});

export const BUTTONSTATUS = Object.freeze({
  WINNER: "winner",
  LOSER: "loser",
  NORMAL: "normal",
});

export const LOADTIMES = Object.freeze({
  LEVELGUESSER: 3,
});

export const DEFAULTRESULTS = Object.freeze({
  winners: [],
  loser: null,
});

export const ICONSIZE = Object.freeze({
  HEIGHT: 32,
  WIDTH: 32,
});

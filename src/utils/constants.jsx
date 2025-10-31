export const BASEURL = `https://digi-api.com/api/v1/digimon/`;

export const MAXDIGIMON = 1488; //According to a query to DAPI

export const DEFAULTDIGIMONSTATUS = Object.freeze({
  standby: true,
  loading: false,
  error: false,
  success: false,
});

export const LEVELS = Object.freeze({
  BABY: "Baby",
  CHILD: "Child",
  ADULT: "Adult",
  PERFECT: "Perfect",
  ULTIMATE: "Ultimate",
  OTHER: "Other",
});

export const LEVELVALUES = Object.freeze({
  [LEVELS.BABY]: ["Baby I", "Baby II"],
  [LEVELS.CHILD]: ["Child"],
  [LEVELS.ADULT]: ["Adult"],
  [LEVELS.PERFECT]: ["Perfect"],
  [LEVELS.ULTIMATE]: ["Ultimate"],
  [LEVELS.OTHER]: ["Armor", "Unknown", "Hybrid"],
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

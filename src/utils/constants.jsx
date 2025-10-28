export const BASEURL = `https://digi-api.com/api/v1/digimon/`;

export const MAXDIGIMON = 1488; //According to a query to DAPI

export const DEFAULTDIGIMONSTATUS = Object.freeze({
  standby: true,
  loading: false,
  error: false,
  success: false,
});

export const LEVELS = Object.freeze({
  BABY: ["Baby I", "Baby II"],
  CHILD: ["Child"],
  ADULT: ["Adult"],
  PERFECT: ["Perfect"],
  ULTIMATE: ["Ultimate"],
  OTHER: ["Armor", "Unknown", "Hybrid"],
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
});

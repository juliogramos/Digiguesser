import { MAXDIGIMON } from "./constants";

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomId(differentId = null) {
  let id = differentId;
  while (id === differentId) {
    id = randomRange(1, MAXDIGIMON);
  }
  return id;
}

export { getRandomId };

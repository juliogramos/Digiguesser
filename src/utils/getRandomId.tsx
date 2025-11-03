import { MAXDIGIMON } from "./constants";

function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomId(differentId: number | null = null) {
  let id = differentId;
  while (id === differentId) {
    id = randomRange(1, MAXDIGIMON);
  }
  return id;
}

export default getRandomId;

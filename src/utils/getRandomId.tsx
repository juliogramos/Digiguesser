import { MAXDIGIMON } from "./constants";

function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomId(differentId?: number): number {
  const notThisId = differentId ?? -1;
  let id = notThisId;
  while (id === notThisId) {
    id = randomRange(1, MAXDIGIMON);
  }
  return id;
}

export default getRandomId;

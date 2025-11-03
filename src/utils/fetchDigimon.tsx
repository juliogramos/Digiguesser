import { BASEURL } from "./constants";
import type { DigimonInterface } from "./digimonInterfaces";

const config = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

async function fetchDigimon(id: number): Promise<DigimonInterface> {
  const target = BASEURL + `${id}`;
  const res = await fetch(target, config);
  return res.json();
}

export default fetchDigimon;

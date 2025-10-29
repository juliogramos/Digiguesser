import { BASEURL } from "./constants";

const config = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

async function fetchDigimon(id) {
  const target = BASEURL + `${id}`;
  const res = await fetch(target, config);
  return res.json();
}

export { fetchDigimon };

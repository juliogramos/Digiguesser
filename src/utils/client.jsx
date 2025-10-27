import { BASEURL } from "../utils/constants";

function client({ id }) {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const target = BASEURL + `${id}`;
  return fetch(target, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default client;

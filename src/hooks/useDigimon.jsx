import { useAsync } from "./useAsync";
import client from "../utils/client";
import { MAXDIGIMON, DEFAULTDIGIMONSTATUS } from "../utils/constants";
import randomRange from "../utils/randomRange";
import * as React from "react";

function useDigimon() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [digimon, setDigimon] = React.useState(null);
  const [status, setStatus] = React.useState(DEFAULTDIGIMONSTATUS);

  // Update status
  React.useEffect(() => {
    setStatus({
      standby: digimon === null && !isLoading && !isError && !isSuccess,
      loading: isLoading,
      error: isError,
      success: isSuccess,
    });
  }, [digimon, isError, isLoading, isSuccess]);

  // Assemble Digimon object when data comes
  React.useEffect(() => {
    if (!data) {
      setDigimon(null);
      return;
    }

    let levelList = [];
    data.levels.map((levelObj) => {
      levelList.push(levelObj.level);
    });

    const newDigimonObject = {
      id: data.id,
      name: data.name,
      image: data.images[0] ?? null,
      levels: levelList,
      prevos: data.priorEvolutions ?? [],
      evos: data.nextEvolutions ?? [],
    };

    console.log("New Digimon: ", newDigimonObject);

    setDigimon(newDigimonObject);
  }, [data, setDigimon]);

  const getRandomDigimon = React.useCallback(
    (differentId = null) => {
      let id = differentId;
      while (id === differentId) {
        id = randomRange(1, MAXDIGIMON);
      }
      run(client({ id }));
    },
    [run]
  );

  const getDigimonById = React.useCallback(
    (id) => {
      if (id < 1 || id > MAXDIGIMON)
        throw Error(`Digimon ID out of range - Received ${id}`);
      run(client({ id }));
    },
    [run]
  );

  return {
    digimon,
    error,
    status,
    getRandomDigimon,
    getDigimonById,
    setDigimon,
  };
}

export { useDigimon };

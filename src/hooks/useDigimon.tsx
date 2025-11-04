import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDigimon from "@/utils/fetchDigimon";
import getRandomId from "@/utils/getRandomId";
import type {
  DigimonInterface,
  LevelInterface,
} from "@/utils/digimonInterfaces";

/* interface AssembledDigimon {
  id: number;
  name: string;
  image: string;
  levels: string[];
  prevos: ShortDigimonInterface[];
  evos: ShortDigimonInterface;
} */

function assembleDigimon(data: DigimonInterface) {
  const levelList: string[] = [];
  data.levels.map((levelObj: LevelInterface) => {
    levelList.push(levelObj.level);
  });

  return {
    id: data.id,
    name: data.name,
    image: data.images[0]?.href ?? undefined,
    levels: levelList,
    prevos: data.priorEvolutions,
    evos: data.nextEvolutions,
  };
}

function useDigimon(id?: number) {
  const [digimonId, setDigimonId] = useState(() => id ?? getRandomId());
  const { data, isLoading } = useQuery({
    queryKey: ["digimon", digimonId],
    queryFn: async () => {
      const data = await fetchDigimon(digimonId);
      if (data.error) throw new Error(data.message);
      const typedData = data as DigimonInterface;
      return typedData;
    },
    throwOnError: true,
    retry: 0,
  });

  const getRandomDigimon = useCallback(
    () => setDigimonId((prevId) => getRandomId(prevId)),
    []
  );

  const getDigimonById = useCallback((id: number) => setDigimonId(id), []);

  const digimon = data ? assembleDigimon(data) : null;
  return {
    digimon,
    isLoading,
    getRandomDigimon,
    getDigimonById,
  };
}

export default useDigimon;

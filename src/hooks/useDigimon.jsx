import { useQuery } from "@tanstack/react-query";
import { fetchDigimon } from "@/utils";

function assembleDigimon(data) {
  let levelList = [];
  data.levels.map((levelObj) => {
    levelList.push(levelObj.level);
  });

  return {
    id: data.id,
    name: data.name,
    image: data.images[0] ?? null,
    levels: levelList,
    prevos: data.priorEvolutions ?? [],
    evos: data.nextEvolutions ?? [],
  };
}

function useDigimon(digimonId) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["digimon", digimonId],
    queryFn: async () => {
      const data = await fetchDigimon(digimonId);
      return data;
    },
    enabled: !!digimonId,
  });

  const digimon = data ? assembleDigimon(data) : null;
  return { digimon, error, isError, isLoading };
}

export default useDigimon;

import { useDigimon } from "./hooks/useDigimon";
import { Box, Button, Card, Container } from "@mui/material";
import { useEffect } from "react";

export const EvoGuesserScreen = () => {
  const {
    digimon: digimonA,
    error: errorA,
    status: statusA,
    getRandomDigimon: getRandomDigimonA,
    setDigimon: setDigimonA,
  } = useDigimon();
  const {
    digimon: digimonB,
    error: errorB,
    status: statusB,
    getRandomDigimon: getRandomDigimonB,
  } = useDigimon();

  useEffect(() => {
    getRandomDigimonA();
    getRandomDigimonB();
  }, [getRandomDigimonA, getRandomDigimonB]);

  function swapDigimon() {
    setDigimonA(digimonB);
    getRandomDigimonB(digimonA.id);
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Card>
          {statusA.loading || statusA.standby
            ? "Loading..."
            : statusA.success
            ? digimonA.name
            : `Error: ${errorA.message}`}
        </Card>
        <Card>
          {statusB.loading || statusB.standby
            ? "Loading..."
            : statusB.success
            ? digimonB.name
            : `Error: ${errorB.message}`}
        </Card>
      </Box>
      <Button onClick={swapDigimon}>Swap!</Button>
    </Container>
  );
};

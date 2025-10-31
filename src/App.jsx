import "./App.css";
import { Container } from "@mui/material";
import { GameProvider } from "./components/GameProvider";
import { LevelGuesserScreen } from "./screens/LevelGuesserScreen";

function App() {
  return (
    <Container>
      <GameProvider>
        <LevelGuesserScreen />
      </GameProvider>
    </Container>
  );
}

export default App;

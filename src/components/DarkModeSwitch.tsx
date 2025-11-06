import {
  FormControlLabel,
  Switch,
  Typography,
  useColorScheme,
} from "@mui/material";

function DarkModeSwitch() {
  const { mode, setMode } = useColorScheme();
  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={mode === "dark"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            event.target.checked ? setMode("dark") : setMode("light")
          }
        />
      }
      label={<Typography variant="body2">Dark Mode</Typography>}
    />
  );
}

export default DarkModeSwitch;

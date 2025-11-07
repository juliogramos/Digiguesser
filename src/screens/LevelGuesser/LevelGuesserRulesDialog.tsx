import { Dialog, DialogTitle, Typography, Stack, Button } from "@mui/material";

interface LevelGuesserRulesDialogProps {
  open: boolean;
  onClose: () => void;
}

function LevelGuesserRulesDialog({
  open,
  onClose,
}: LevelGuesserRulesDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper">
      <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
        <DialogTitle style={{ padding: 0 }}>Rules</DialogTitle>
        <ul>
          <li>
            <Typography>
              Guess the level (digivolution stage) of the Digimon shown on
              screen by clicking on the corresponding button.
            </Typography>
          </li>
          <li>
            <Typography>
              You can use the switch at the top of the screen to toggle between
              the two different naming conventions for levels.
            </Typography>
          </li>
          <li>
            <Typography>
              The "Other" category encompasses the following levels: Armor,
              Unknown, Hybrid or no level listed.
            </Typography>
          </li>
          <li>
            <Typography>
              Some digimon may have multiple possible levels, in which case all
              of them will be counted as valid choices.
            </Typography>
          </li>
          <li>
            <Typography>
              The data for the digimon is drawn from mostly fan sources, so some
              information may be missing or outdated.
            </Typography>
          </li>
        </ul>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Dialog>
  );
}

export default LevelGuesserRulesDialog;

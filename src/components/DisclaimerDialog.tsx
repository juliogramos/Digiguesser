import {
  Dialog,
  DialogTitle,
  Link,
  Typography,
  Stack,
  Button,
} from "@mui/material";

interface DisclaimerDialogProps {
  open: boolean;
  onClose: () => void;
}

function DisclaimerDialog({ open, onClose }: DisclaimerDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
        <DialogTitle style={{ padding: 0 }}>Disclaimer</DialogTitle>
        <Typography>
          Digimon and related media are registered trademarks of Bandai.
          Digiguessr is not affiliated with nor claims ownership to material
          produced by Bandai.
        </Typography>
        <Typography>
          This site utilizes the free Digimon API{" "}
          <Link href="https://digi-api.com/">DAPI</Link> which uses data from
          official and fan-based sources.
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Dialog>
  );
}

export default DisclaimerDialog;

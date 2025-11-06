import ChipBox from "./ChipBox";
import DarkModeSwitch from "./DarkModeSwitch";
import DisclaimerDialog from "./DisclaimerDialog";
import { Stack, Divider, Link as MUILink } from "@mui/material";
import { useState } from "react";

function Footer() {
  const [disclaimer, setDisclaimer] = useState(false);

  return (
    <ChipBox>
      <Stack
        direction="row"
        spacing={2}
        divider={
          <Divider
            aria-hidden="true"
            orientation="vertical"
            sx={{ bgcolor: "border.main" }}
            flexItem
          />
        }
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <DarkModeSwitch />
        <MUILink
          variant="body2"
          onClick={() => setDisclaimer(true)}
          sx={{ cursor: "pointer" }}
          color="primary.main"
        >
          Disclaimer
        </MUILink>
        <MUILink
          variant="body2"
          href="https://github.com/juliogramos/Digiguessr"
          sx={{ cursor: "pointer", paddingRight: 1 }}
          color="primary.main"
        >
          Github
        </MUILink>
      </Stack>
      <DisclaimerDialog
        open={disclaimer}
        onClose={() => setDisclaimer(false)}
      />
    </ChipBox>
  );
}

export default Footer;

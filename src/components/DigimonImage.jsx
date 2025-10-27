import { CircularProgress } from "@mui/material";
import { useState } from "react";

function DigimonImage({ src }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <span style={{ display: loading ? "block" : "none" }}>
        <CircularProgress />
      </span>
      <span style={{ display: loading ? "none" : "block" }}>
        <img src={src} onLoad={() => setLoading(false)} />
      </span>
    </>
  );
}

export { DigimonImage };

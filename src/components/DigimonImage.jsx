import { CircularProgress, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { DIGIMONIMAGESIZE } from "../utils/constants";

function DigimonImage({ src }) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef();

  // During testing this wasn't actually necessary, but I still want to make
  //  sure that cached images still display properly
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) setLoading(false);
  }, []);

  useEffect(() => {
    console.log(src);
    if (!src) setLoading(true);
  }, [src]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: DIGIMONIMAGESIZE.WIDTH,
        maxHeight: DIGIMONIMAGESIZE.HEIGHT,
        width: "100%",
        height: "100%",
      }}
    >
      <span
        style={{
          display: loading ? "block" : "none",
        }}
      >
        <CircularProgress />
      </span>
      <span style={{ display: loading ? "none" : "block" }}>
        <img
          alt=""
          ref={imageRef}
          src={src}
          style={{
            width: "100%",
            height: "100%",
          }}
          onLoad={() => setLoading(false)}
        />
      </span>
    </Box>
  );
}

export { DigimonImage };

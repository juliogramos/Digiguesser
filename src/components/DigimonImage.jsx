import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function DigimonImage({ src }) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef();

  // During testing this wasn't actually necessary, but I still want to make
  //  sure that cached images still display properly
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) setLoading(false);
  }, []);

  return (
    <>
      <span style={{ display: loading ? "block" : "none" }}>
        <CircularProgress />
      </span>
      <span style={{ display: loading ? "none" : "block" }}>
        <img alt="" ref={imageRef} src={src} onLoad={() => setLoading(false)} />
      </span>
    </>
  );
}

export { DigimonImage };

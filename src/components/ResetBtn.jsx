import React, { useContext } from "react";
import { Filter } from "../states/Contexts";

function ResetBtn() {
  const {
    setBrightness,
    setContrast,
    setHue,
    setBlur,
    setGrayscale,
    setInvert,
    setSaturate,
    setSepia,
  } = useContext(Filter);
  const handleResteBtn = (e) => {
    setBrightness(100);
    setContrast(100);
    setHue(0);
    setBlur(0);
    setGrayscale(0);
    setInvert(0);
    setSaturate(100);
    setSepia(0);
  };
  return (
    <button className="reste-btn" onClick={handleResteBtn}>
      Reset
    </button>
  );
}

export { ResetBtn };

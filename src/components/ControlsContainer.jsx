import React, { useContext } from "react";
import InputSlider from "./InputSlider";
import { Filter } from "../states/Contexts";

function ControlsContainer() {
  const {
    brightness,
    contrast,
    hue,
    blur,
    grayscale,
    invert,
    saturate,
    sepia,
    setBrightness,
    setContrast,
    setHue,
    setBlur,
    setGrayscale,
    setInvert,
    setSaturate,
    setSepia,
  } = useContext(Filter);
  return (
    <div className="controls-container">
      <h2>Edit your photo</h2>
      <InputSlider
        name="brightness"
        setValue={setBrightness}
        min={0}
        max={200}
        value={brightness}
      />
      <InputSlider
        name="contrast"
        setValue={setContrast}
        min={0}
        max={200}
        value={contrast}
      />
      <InputSlider name="hue" setValue={setHue} min={0} max={360} value={hue} />
      <InputSlider
        name="blur"
        setValue={setBlur}
        min={0}
        max={100}
        value={blur}
      />
      <InputSlider
        name="grayscale"
        setValue={setGrayscale}
        min={0}
        max={100}
        value={grayscale}
      />
      <InputSlider
        name="invert"
        setValue={setInvert}
        min={0}
        max={100}
        value={invert}
      />
      <InputSlider
        name="saturate"
        setValue={setSaturate}
        min={0}
        max={200}
        value={saturate}
      />
      <InputSlider
        name="sepia"
        setValue={setSepia}
        min={0}
        max={100}
        value={sepia}
      />
    </div>
  );
}

export default ControlsContainer;

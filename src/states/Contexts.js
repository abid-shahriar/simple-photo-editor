import React, { createContext, useState } from "react";

export const Filter = createContext();

function Contexts(props) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [hue, setHue] = useState(0);
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [invert, setInvert] = useState(0);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);

  const filetrValues = {
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
  };

  return (
    <Filter.Provider value={filetrValues}>{props.children}</Filter.Provider>
  );
}

export default Contexts;

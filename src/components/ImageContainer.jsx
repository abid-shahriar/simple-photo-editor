import React, { useContext } from "react";
import demoPic from "../assets/img/demopic.jpg";
import { Filter } from "../states/Contexts";

function ImageContainer() {
  const {
    brightness,
    contrast,
    hue,
    blur,
    grayscale,
    invert,
    saturate,
    sepia,
  } = useContext(Filter);

  return (
    <div className="image-container">
      <img
        style={{
          filter: `grayscale(${grayscale}%) blur(${blur}px) contrast(${contrast}%) hue-rotate(${hue}deg) invert(${invert}%)
           saturate(${saturate}%) sepia(${sepia}%) brightness(${brightness}%)`,
        }}
        src={demoPic}
        alt="random"
      />
    </div>
  );
}

export default ImageContainer;

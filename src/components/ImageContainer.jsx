import React, { useContext } from "react";
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
    randomNum,
    setBrightness,
    setContrast,
    setHue,
    setBlur,
    setGrayscale,
    setInvert,
    setSaturate,
    setSepia,
    setRandomNum,
  } = useContext(Filter);

  const handelImaChange = (e) => {
    const img = e.target.parentElement;
    img.classList.add("loading");
    let generateRandomNum = Math.floor(Math.random() * 400);
    setRandomNum(generateRandomNum);
    setBrightness(100);
    setContrast(100);
    setHue(0);
    setBlur(0);
    setGrayscale(0);
    setInvert(0);
    setSaturate(100);
    setSepia(0);
  };

  const imgLoadStart = (e) => {
    if (e.target.parentElement.classList.contains("loading")) {
      e.target.parentElement.classList.remove("loading");
    }
  };

  return (
    <div className="image-container loading">
      <img
        style={{
          filter: `grayscale(${grayscale}%) blur(${blur}px) contrast(${contrast}%) hue-rotate(${hue}deg) invert(${invert}%)
           saturate(${saturate}%) sepia(${sepia}%) brightness(${brightness}%)`,
        }}
        onLoad={imgLoadStart}
        src={`https://source.unsplash.com/collection/${randomNum}/1000x700`}
        alt="random"
      />
      <button className="change-img-btn" onClick={handelImaChange}>
        Change Image
      </button>
    </div>
  );
}

export default ImageContainer;

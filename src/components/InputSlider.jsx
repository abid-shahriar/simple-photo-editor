import React from "react";

function InputSlider({ name, setValue, value, min, max }) {
  const handleSlide = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-slider">
      <label htmlFor={name}>{name}:</label>
      <input
        onChange={handleSlide}
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
}

export default InputSlider;

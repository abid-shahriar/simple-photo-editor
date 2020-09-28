import React from "react";
import ControlsContainer from "./components/ControlsContainer";
import ImageContainer from "./components/ImageContainer";
import Contexts from "./states/Contexts";

function App() {
  return (
    <Contexts>
      <div className="main-container">
        <ImageContainer />
        <ControlsContainer />
      </div>
    </Contexts>
  );
}

export default App;

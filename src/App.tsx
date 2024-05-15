import React, { useState } from "react";
import LeftNavBar from "./components/LeftNavBar";
import MainWindow from "./components/MainWindow";
import Logo from "./components/Logo";
import AlgorithmBar from "./components/AlgorithmBar";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(
    null
  );

  const handleAlgorithmSelect = (algorithm: string) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Logo />
        <AlgorithmBar selectedAlgorithm={selectedAlgorithm} />
      </div>
      <div className="row">
        <LeftNavBar onSelectAlgorithm={handleAlgorithmSelect} />
        <MainWindow selectedAlgorithm={selectedAlgorithm} />
      </div>
    </div>
  );
}

export default App;

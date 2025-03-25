import React from "react";
import Matrix from "./components/Matrix"; // Import our Matrix component

function App() {
  return (
    <div>
      <h1>React 3x3 Matrix</h1>
      <h4>click on the box to change colour</h4>
      <Matrix /> {/* Render the Matrix */}
    </div>
  );
}

export default App;

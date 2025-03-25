import React, { useState } from "react";
import "./Matrix.css"; // Import CSS for styling

const Matrix = () => {
  // This state keeps track of each box's color (initially all white)
  const [grid, setGrid] = useState(Array(9).fill("white"));

  // This keeps track of the order in which boxes are clicked
  const [clickedIndices, setClickedIndices] = useState([]);

  // Function to handle clicking on a box
  const handleClick = (index) => {
    // Only allow changing if the box hasn't been clicked before
    if (grid[index] === "white") {
      const newGrid = [...grid]; // Copy the existing grid
      newGrid[index] = "green"; // Change the clicked box to green
      setGrid(newGrid);

      // Store the clicked index
      setClickedIndices([...clickedIndices, index]);

      // If this is the last box being clicked (all 9 clicked), start turning them orange
      if (clickedIndices.length === 8) {
        changeToOrange([...clickedIndices, index]);
      }
    }
  };

  // Function to change all clicked boxes to orange one by one
  const changeToOrange = (indices) => {
    indices.forEach((index, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[index] = "orange"; // Change the color to orange
          return newGrid;
        });
      }, i * 500); // Add a delay for a sequential effect
    });
  };

  return (
    <div className="matrix">
      {/* Creating the 3x3 grid dynamically */}
      {grid.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;


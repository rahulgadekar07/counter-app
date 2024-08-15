// src/components/ProgressBar.js
import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100;

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="my-2">
        <span><b>{value} / {max}</b>
          
        </span>
      </div>
    </>
  );
};

export default ProgressBar;

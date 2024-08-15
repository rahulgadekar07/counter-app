import React, { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import UndoRedo from "./components/UndoRedo";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(150);
  const [history, setHistory] = useState([150]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const max = 150;

  const handleAdd = () => {
    const newValue = Math.min(value + 1, max);
    updateHistory(newValue);
  };

  const handleSubtract = () => {
    const newValue = Math.max(value - 1, 0);
    updateHistory(newValue);
  };

  const updateHistory = (newValue) => {
    const updatedHistory = [...history.slice(0, historyIndex + 1), newValue];
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
    setValue(newValue);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="app-container">
     
      <div className="counter-container">
        <h1>Counter Application</h1>
        <div className="dark-mode-toggle">
        <button className="toggle-btn" onClick={toggleDarkMode}>
          <div className={`switch ${darkMode ? "dark" : "light"}`}>
            {darkMode ? <FaMoon /> : <FaSun />}
          </div>
        </button>
      </div>
        <p>This simple application allows you to increment and decrement a counter, with limits ranging from 0 to 150. You can see the current value reflected in the progress bar below. Additionally, the application supports undoing and redoing your last actions.</p>
        <div className="button-group">
          <button className="btn subtract-btn" onClick={handleSubtract}>Subtract</button>
          <span className="counter-value">{value}</span>
          <button className="btn add-btn" onClick={handleAdd}>Add</button>
        </div>
        <ProgressBar value={value} max={max} />
        <UndoRedo
          history={history}
          historyIndex={historyIndex}
          setNum={setValue}
          setHistoryIndex={setHistoryIndex}
        />
      </div>
    </div>
  );
};

export default App;

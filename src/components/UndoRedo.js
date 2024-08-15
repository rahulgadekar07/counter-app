// src/components/UndoRedo.js
import React from 'react';
import '../styles/UndoRedo.css';

const UndoRedo = ({ history, historyIndex, setNum, setHistoryIndex }) => {
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setNum(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setNum(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  return (
    <div className="undo-redo-container">
      <button className="btn" onClick={handleUndo} disabled={historyIndex === 0}>Undo</button>
      <button className="btn" onClick={handleRedo} disabled={historyIndex === history.length - 1}>Redo</button>
    </div>
  );
};

export default UndoRedo;

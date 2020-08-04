import React from "react";

const Board = ({ height }) => (
  <div className="board">
    <style jsx>{`
      .board {
        height: ${height || "10px"};
        background: #f0f0f0;
      }
    `}</style>
  </div>
);

export default Board;

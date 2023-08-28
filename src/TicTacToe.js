import React, { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function TicTacToe() {
  const { width, height } = useWindowSize();

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log("a=>", board[a], "b=>", board[b], "c=>", board[c]);
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("a=>", board[a], "b=>", board[b], "c=>", board[c]);
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);
  console.log("winner", winner);

  const handleClick = (index) => {
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      console.log(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="full-game">
      <h1>TicTacToe</h1>
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div className="game-box" style={styles} onClick={onPlayerClick}>
      {val}
    </div>
  );
}

export default TicTacToe;

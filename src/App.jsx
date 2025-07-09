import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "❌",
  O: "🔵",
};

const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="cell" onClick={handleClick}>
      <span className="cell__content">{children}</span>
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  return (
    <main className="game">
      <header>
        <h1>Tic Tac Toe</h1>
        <p>Player {turn}'s Turn</p>
      </header>
      <section className="board">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
    </main>
  );
}

export default App;

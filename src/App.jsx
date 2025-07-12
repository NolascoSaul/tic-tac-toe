import "./App.css";
import { useState } from "react";
import { FaRotateLeft } from "react-icons/fa6";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./consts.js";
import { checkWinner } from "./utils/board.js";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="game">
      <header>
        <h1>Tic Tac Toe</h1>
        {winner === null && <p>Player {turn}'s turn</p>}
        {winner !== null && (
          <p>{winner === false ? "It's a tie" : `Player ${winner}'s win!`}</p>
        )}
      </header>
      <section className="board">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <footer>
        <button className="button" onClick={resetGame}>
          <FaRotateLeft></FaRotateLeft>
          New Game
        </button>

        <section className="stats">
          <div className="stats__x">
            <strong>Player X</strong>
            <span>Red</span>
          </div>
          <div className="stats__y">
            <strong>Player O</strong>
            <span>Blue</span>
          </div>
        </section>
      </footer>
    </main>
  );
}

export default App;

import { ButtonReset } from "./ButtonReset.jsx";

export function Modal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Tie" : "Winner:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {winner && <p>{winner}</p>}

        <footer>
          <ButtonReset resetGame={resetGame}></ButtonReset>
        </footer>
      </div>
    </section>
  );
}

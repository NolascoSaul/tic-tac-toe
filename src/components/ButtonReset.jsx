import { FaRotateLeft } from "react-icons/fa6";

export const ButtonReset = ({ resetGame }) => {
  return (
    <button className="button" onClick={resetGame}>
      <FaRotateLeft></FaRotateLeft>
      New Game
    </button>
  );
};

export const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="cell" onClick={handleClick}>
      <span className="cell__content">{children}</span>
    </div>
  );
};

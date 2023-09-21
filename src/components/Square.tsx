interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="border h-10 w-10" onClick={onSquareClick}>
      {value}
    </button>
  );
};

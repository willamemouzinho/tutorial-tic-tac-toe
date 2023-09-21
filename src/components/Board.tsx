import { Square } from "./Square";
import { Status } from "./Status";

const calculateWinner = (squares: string[]) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}

export const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const winner = calculateWinner(squares);

  const status = "Próximo player: " + (xIsNext ? "X" : "O");
  // if (winner) {
  //   status = "Ganhador: " + winner;
  // } else {
  // }

  const handleClick = (squareIndex: number) => {
    const nextSquares = [...squares];

    if (squares[squareIndex]) {
      return;
    }

    if (calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares.splice(squareIndex, 1, "X");
    } else {
      nextSquares.splice(squareIndex, 1, "O");
    }
    onPlay(nextSquares);
    // setXIsNext(!xIsNext);
  };

  return (
    <div>
      {winner ? <Status winner={winner} /> : <div className="mb-4 text-center text-sm">{status}</div>}
      
      {/* <div className="mb-4 text-center text-sm">{status}</div> */}
      <div className="grid grid-cols-3 grid-rows-3">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

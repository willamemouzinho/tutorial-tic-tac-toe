import { useState } from "react";
import { Board } from "./components/Board";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_squares: string[], move) => {
    let description;
    if (move > 0) {
      description = "Vá para o movimento #" + move;
    } else {
      description = "Vá para o início";
    }
    return (
      <li key={move}>
        <button
          className="py-1 px-2 text-xs rounded-sm bg-zinc-800"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex pt-10 justify-center h-screen bg-zinc-900 text-zinc-100">
      <div>
        <h1 className="text-xl font-semibold text-center mb-5">Tic-Tac-Toe</h1>
        <div className="relative flex gap-x-10">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <div className="absolute top-0 left-[150%]">
            <ol className="w-40 flex flex-col gap-y-2 list-decimal">
              {moves}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

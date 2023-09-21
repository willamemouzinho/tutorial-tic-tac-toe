interface StatusProps {
  winner: string;
}
export const Status = ({ winner }: StatusProps) => {
  return (
    <div className="mb-4 text-center text-sm font-semibold">
      ✨ Ganhador: <code className="bg-zinc-700 p-1 rounded-sm">{winner}</code> 
    </div>
  );
};

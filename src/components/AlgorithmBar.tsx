interface AlgorithBarProps {
  selectedAlgorithm: string | null;
}

function AlgorithmBar({ selectedAlgorithm }: AlgorithBarProps) {
  return (
    <div className="col">
      <h3>{selectedAlgorithm}</h3>
    </div>
  );
}

export default AlgorithmBar;

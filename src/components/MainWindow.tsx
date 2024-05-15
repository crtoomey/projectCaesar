import DES from "./DES";
import CaesarCipher from "./CaesarCipher";

interface MainWindowProps {
  selectedAlgorithm: string | null;
}

function MainWindow({ selectedAlgorithm }: MainWindowProps) {
  let algorithm = selectedAlgorithm;

  function renderAlgorithm(algorithm: string | null) {
    switch (algorithm) {
      case "DES":
        return <DES algorithm="DES"></DES>;
      case "3DES":
        return (
          <>
            <DES algorithm="DES"></DES> <DES algorithm="DES"></DES>
            <DES algorithm="DES"></DES>
          </>
        );
      case "Caesar Cipher":
        return <CaesarCipher algorithm="Caesar Cipher"></CaesarCipher>;
      default:
        return (
          <p>
            Please select an algorithm from the left or search for one above.
          </p>
        );
    }
  }

  return <div className="col">{renderAlgorithm(algorithm)}</div>;
}

export default MainWindow;

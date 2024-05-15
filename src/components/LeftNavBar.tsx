import ListGroup from "./ListGroup";

interface LeftNavBarProps {
  onSelectAlgorithm: (item: string) => void;
}

function LeftNavBar({ onSelectAlgorithm }: LeftNavBarProps) {
  const encryptionAlgorithms = ["Caesar Cipher", "DES", "3DES"];
  // const hashingAlgorithms = ["Coming soon"];

  return (
    <div className="col-2">
      <ListGroup
        heading="Encryption"
        items={encryptionAlgorithms}
        onSelectItem={onSelectAlgorithm}
      />
      {/* <ListGroup
        heading="Hashing"
        items={hashingAlgorithms}
        onSelectItem={onSelectAlgorithm}
      /> */}
    </div>
  );
}

export default LeftNavBar;

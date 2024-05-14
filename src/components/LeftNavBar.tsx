import ListGroup from "./ListGroup";
import UpdateMainWindow from "./UpdateMainWindow";

function LeftNavBar() {
  const encryptionAlgorithms = ["Caesar Cipher", "DES"];
  const hashingAlgorithms = ["Coming soon"];

  const handleSelectItem = (item: string) => {
    UpdateMainWindow(item);
  };

  return (
    <div className="col-2">
      <ListGroup
        heading="Encryption"
        items={encryptionAlgorithms}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <ListGroup
        heading="Hashing"
        items={hashingAlgorithms}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default LeftNavBar;

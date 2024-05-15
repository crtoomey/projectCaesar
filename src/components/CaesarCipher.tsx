import Accordion from "./Accordion";

interface CaesarCipherProps {
  algorithm: string;
}

function CaesarCipher({ algorithm }: CaesarCipherProps) {
  // Display information based on the algorithm
  return (
    <div>
      <h4>Details for {algorithm}</h4>
      <p>Information about {algorithm}...</p>
      <Accordion
        heading="Caesar Cipher"
        content="Some accordion content"
      ></Accordion>
    </div>
  );
}

export default CaesarCipher;

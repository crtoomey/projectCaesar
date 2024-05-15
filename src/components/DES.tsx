import Accordion from "./Accordion";

interface DESProps {
  algorithm: string;
}

function DES({ algorithm }: DESProps) {
  // Display information based on the algorithm
  return (
    <div>
      <h4>Details for {algorithm}</h4>
      <p>Information about {algorithm}...</p>
      <Accordion heading="DES" content={crypto.randomUUID()}></Accordion>
    </div>
  );
}

export default DES;

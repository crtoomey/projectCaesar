import Accordion from "./Accordion";
import UpdateMainWindow from "./UpdateMainWindow";

function MainWindow() {
  const state = (
    <p>Please select an algorithm from the left or search for one above.</p>
  );

  return <div className="col">{state}</div>;
}

export default MainWindow;

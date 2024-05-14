import LeftNavBar from "./components/LeftNavBar";
import SearchBar from "./components/SearchBar";
import MainWindow from "./components/MainWindow";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Logo></Logo>
        <SearchBar></SearchBar>
      </div>
      <div className="row">
        <LeftNavBar></LeftNavBar>
        <MainWindow></MainWindow>
      </div>
    </div>
  );
}

export default App;

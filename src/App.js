import Navbar from "./Components/Navbar/Navbar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings={"No se han encontrado modelos 3D"} />
    </div>
  );
}

export default App;

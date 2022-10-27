import Compclase from "./components/Compclase";
import Compfuncion from "./components/Compfuncion";
import Contador from "./components/Contador";
import Estados from "./components/Estados";
import Eventos from "./components/Eventos";
import Parrafo from "./components/Parrafo";
import Variables from "./components/Variables";

function App() {
  return (
    <div className="container">
      <h1>Hola</h1>
      <h2>Bienvenidos A React</h2>
      <Compclase></Compclase>
      <Compfuncion></Compfuncion>
      <Parrafo></Parrafo>
      <Variables></Variables>
      <Eventos></Eventos>
      <Estados></Estados>
      <Contador></Contador>
    </div>
  );
}

export default App;

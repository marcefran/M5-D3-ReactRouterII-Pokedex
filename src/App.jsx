import { Route, Routes} from "react-router-dom";
import Menu from "./components/Navbar";
import Detalle from "./views/Detalle";
import Pokemones from "./views/Pokemones";
import Home from "./views/Home";

const App = () => {
  return (
    <div> 
      <Menu/>
      <Routes>
        <Route
        path="/"
        element= {<Home/>}/>
        <Route
        path="/pokemones"
        element= {<Pokemones/>}/>
        <Route
        path="/pokemones/:name"
        element= {<Detalle/>}/>

      </Routes>
    </div>
  );
};
export default App; 
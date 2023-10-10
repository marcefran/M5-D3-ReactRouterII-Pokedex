import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
    className="justify-content-between px-5"
    variant="light"
    style={{background: "red"}}>
      <h1 style={{color: "white"}}> PokeDex Pokémon</h1>
 <div>
    <NavLink
    className= {({isActive}) => (isActive ? "me-3-active" : "me-3")}
    to= "/">
    Inicio
    </NavLink>
    <NavLink
    className= {({isActive}) => (isActive ? "active" : undefined)}
    to= "/pokemones">
      {""}
     Pokemones {""}
    </NavLink>

  </div>
  </Navbar>
  );
};
export default Menu;
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
 const [pokemones, setPokemones] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";
  const getPokemons = async () => {
    const res = await fetch (url);
    const { results } = await res.json();
    setPokemones(results);
  };

  const goToPokemonDetail = async () => {
    if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
    else alert("Debe seleccionar un pokemon");
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
  <div className="mt-5 text-center">
      <h1>Selecciona un Pokémon</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select 
        value={pokemonSelected}
        className="form-select text-center"
        onChange={({ target })=> setPokemonSelected(target.value)}
        >
            <option
            value=""
            disabled>
              Buscar
            </option>
          {pokemones.map (({name}, i) => (
            <option
            key={i}
            value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button
        onClick={goToPokemonDetail}
        variant= "dark"
        className="mt-3">
            Ver Detalle
        </Button>
      </div>
  </div>
  
  );
};
export default Pokemones;
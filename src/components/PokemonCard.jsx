import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
    const {name, stats, src, types}= pokemon;
console.log(pokemon)
    return(
        <Card
        className= "  mt-5 mx-auto flex-row p-2"
        >
        <Card.Img
        className="imagen"
        src= {src}
        />
        <Card.Body
        className="card">
            <div>
            <Card.Title
            className="fw-bold">{name}</Card.Title>
            <ul className="text-left">
                <Card.Text>
                    {stats?.map((stat,i) => 
                    <li key={i}>
                        {stat.name}: {stat.base}
                    </li>
                    )}
                </Card.Text>
            </ul>
            <Card.Text className="text-secondary"> {types}</Card.Text>
            </div>
        </Card.Body>        
        </Card>
    );
  };
  export default PokemonCard;
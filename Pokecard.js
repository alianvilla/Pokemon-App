const Pokecard = (props) => {
  return (
    <div className="pokecard">
      <h3 className="pokemon-name">{props.name}</h3>
      <img
        className="pokemon-imagen"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt={props.name}
      />
      <p>Type: {props.type}</p>
      <p>EXP: {props.exp}</p>
    </div>
  );
};

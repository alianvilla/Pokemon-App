const Pokedex = (props) => {
  return (
    <div className="pokedex">
      {props.defaultList.map((element) => {
        return (
          <Pokecard
            key={element.id}
            id={element.id}
            name={element.name}
            type={element.type}
            exp={element.base_experience}
          />
        );
      })}
    </div>
  );
};

const PokeCard = (selectedPokeData) => {
  const { name, weight, height } = selectedPokeData;
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
  );
};

export default PokeCard;

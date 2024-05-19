import { useState, useEffect } from "react";
import PokeCard from "../PokeCard";
let pokeApi = ["bulbasaur", "pikachu", "ditto"];

const ApiCall = () => {
  const [apiData, setApiData] = useState(pokeApi[0]);
  const [selectedPokeData, setSelectedPokeData] = useState();
  // const [searchData, setSearchData] = useState()
  function arrangedData(data) {
    const { id, name, weight, height, abilities } = data;
    const abilitiesData = abilities
      .map((ability) => {
        return ability.ability.name;
      })
      .join(", ");
    return {
      id,
      name,
      weight,
      height,
      abilitiesData,
    };
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${apiData}`
        );
        const data = await response.json();
        const convertedData = arrangedData(data);
        setSelectedPokeData(convertedData);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, [apiData]);

  console.log(selectedPokeData);
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vh",
        height: "100vh",
        fontFamily: "sans-serif",
        fontSize: "18px",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <select onChange={(e) => setApiData(e.target.value)}>
        {pokeApi.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>
      {/* <PokeCard selectedPokeData={selectedPokeData} />
       */}

      <div key={selectedPokeData?.id}>
        <p>{selectedPokeData?.name}</p>
        <p>Height: {selectedPokeData?.height}</p>
        <p>Weight: {selectedPokeData?.weight}</p>
        <p>Abilities: {selectedPokeData?.abilitiesData}</p>
      </div>
    </div>
  );
};

export default ApiCall;

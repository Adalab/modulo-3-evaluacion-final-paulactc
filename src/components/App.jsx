import "../styles/App.scss";
import data from "../data/character.json";
import { useState } from "react";

function App() {
  //VARIABLES DE ESTADO
  const [character, setCharacter] = useState(data);

  return (
    <>
      <header>
        <h1>Harry Potter </h1>
      </header>
      <main>
        <ul>
          {data.map((eachCharacterObj) => (
            <li key={eachCharacterObj.nombre} className="rendereachCharacter">
              <p>
                <img
                  className="image"
                  src={eachCharacterObj.imagen}
                  alt={`photo ${eachCharacterObj.nombre}`}
                />
              </p>
              <p>{eachCharacterObj.nombre} </p>
              <p>{eachCharacterObj.especie}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

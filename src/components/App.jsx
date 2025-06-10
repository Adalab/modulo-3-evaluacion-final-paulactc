import "../styles/App.scss";
import data from "../data/character.json";
import { useState } from "react";
import List from "../components/List";

function App() {
  //VARIABLES DE ESTADO
  const [character, setCharacter] = useState(data);

  return (
    <>
      <header>
        <h1>Harry Potter </h1>
      </header>
      <main>
        <List character={character} />
      </main>
    </>
  );
}

export default App;

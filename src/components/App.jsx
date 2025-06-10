import "../styles/App.scss";
import { useEffect, useState } from "react";
import List from "../components/List";

function App() {
  //VARIABLES DE ESTADO
  const [character, setCharacter] = useState([]);

  //variables para los dos filtros
  {
    /*const [filterName, setFilterName] = useState("");
  const  [filterHouse, setFilterHouse]=useState("")*/
  }
  //una variable para los dos filtros
  const [filters, setFilters] = useState({
    name: "",
    house: "",
  });

  //USE EFFECT

  useEffect(() => {
    //cuando carga la página

    fetch("https://hp-api.onrender.com/api/characters")
      //le encadeno este then para convertirnos esa respuesta( con todo, header etc ) solo en la parte del Json
      .then((res) => res.json())
      //aquí manipulamos esos datos y los guardamos en mi variable de setCharacter
      .then((data) => {
        setCharacter(data);
      });
  }, []);

  //EVENTOS

  //los dos handles
  {
    /*const handleInputFilterName = (ev) => {
    setfilters({
      ...filters,
      name: ev.target.value,
    });
  };
  const handleInputFilterHouse = (ev) => {
    setfilters({
      ...filters,
      house: ev.target.value,
    });
  };*/
  }

  const handleInputsFilters = (ev) => {
    //saco los dos atributos id y value del ev.target
    const { id, value } = ev.target;
    //a set filter le asigno un nuevo objeto
    setFilters({
      //con todo lo que tiene filters
      ...filters,
      //en la propiedad que hay en id voy a poner el value de la propiedad value
      [id]: value,
    });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const filtercharacter = character
    .filter((eachCharacter) =>
      eachCharacter.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.house
        .toLocaleLowerCase()
        .includes(filters.house.toLocaleLowerCase())
    );

  return (
    <>
      <header>
        <h1>Harry Potter </h1>
      </header>
      <main>
        <form className="form" onSubmit={handleForm}>
          <label>Busca por personaje:</label>
          <input
            onInput={handleInputsFilters}
            type="text"
            name="name"
            placeholder="Harry Potter"
            id="name"
            value={filters.name}
          ></input>
          <p>Selecciona la casa:</p>
          <select
            onInput={handleInputsFilters}
            value={filters.house}
            name="house"
            id="house"
          >
            <option value="">Todas</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </form>
        <List character={filtercharacter} />
      </main>
    </>
  );
}

export default App;

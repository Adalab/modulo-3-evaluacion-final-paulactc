import Item from "../components/item";
function List({ character }) {
  return (
    <>
      <ul>
        {character.map((eachCharacterObj) => (
          <li
            key={eachCharacterObj.id + eachCharacterObj.name}
            className="rendereachCharacter"
          >
            <Item eachCharacterObj={eachCharacterObj} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;

function Item({ eachCharacterObj }) {
  return (
    <>
      <p>
        <img
          className="image"
          src={eachCharacterObj.image}
          alt={`photo ${eachCharacterObj.name}`}
        />
      </p>
      <p>{eachCharacterObj.name} </p>
      <p>{eachCharacterObj.species}</p>
    </>
  );
}

export default Item;

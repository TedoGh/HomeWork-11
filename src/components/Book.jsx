const Book = ({ imgUrl, name, description, characters, action }) => {
  return (
    <div className="book">
      <img src={imgUrl} alt={name} />
      <h1 className="book-title">{name}</h1>
      <div className="line"></div>
      <h3>Description : </h3>
      <p className="book-description">{description}</p>
      <div className="line"></div>
      <h3>Characters : </h3>
      <ul className="list">
        {characters.map((character, index) => {
          return <li key={index}>{character}</li>;
        })}
      </ul>
      <div className="line"></div>
      <button onClick={() => action(name, characters)} className="btn">
        Click
      </button>
    </div>
  );
};

export default Book;

import Message from "../Message";

function ListGroup() {
  let items = ["paris", "new york", "san", "india", "US"];

  //const message = items.length === 0 ? <p>No items found</p> : null;

  return (
    <div>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;

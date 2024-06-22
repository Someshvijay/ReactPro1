import Message from "../Message";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["paris", "new york", "san", "india", "US"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const message = items.length === 0 ? <p>No items found</p> : null;

  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;

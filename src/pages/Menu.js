import { useEffect, useState } from "react";

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "/api/menu.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);
  return (
    <>
      {items.map((item) => {
        return (
          <div>
            <p>{item.type}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </>
  );
}

import "./MenuItem.css";

import { BiMinus, BiPlus } from "react-icons/bi";
import ItemImage from "./ItemImage";

export default function MenuItem({ item, onUpdateQuantity: updateQuantity }) {
  function increment() {
    if (item.quantity < 15) {
      updateQuantity(item.id, item.quantity + 1);
    }
  }

  function decrement() {
    if (item.quantity > 0) {
      updateQuantity(item.id, item.quantity - 1);
    }
  }

  return (
    <section className="menu__item">
      <div className="menu__item--content">
        <ItemImage item={item} />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <p className="menu__item--price">{(item.price / 100).toFixed(2)} €</p>
      </div>
      <div className="menu__counter">
        <BiMinus className="menu__counter--button" onClick={decrement} />
        <span className="menu__counter--number">{item.quantity}</span>
        <BiPlus className="menu__counter--button" onClick={increment} />
      </div>
    </section>
  );
}

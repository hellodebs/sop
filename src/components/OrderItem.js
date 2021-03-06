import "./OrderItem.css";
import { BiX } from "react-icons/bi";
import ItemImage from "./ItemImage";

export default function OrderItem({ orderItem, onDeleteButton: deleteItem }) {
  return (
    <section className="order__item">
      <div className="order__item--content">
        <ItemImage item={orderItem} />
        <div>
          <p># {orderItem.id}</p>
          <h3>{orderItem.name}</h3>
          <p>Quantity: {orderItem.quantity}</p>
          <p>Price: {orderItem.price / 100} €</p>
        </div>
        <button
          onClick={() => deleteItem(orderItem.id)}
          className="order__item--delete"
        >
          <BiX />
        </button>
      </div>
    </section>
  );
}

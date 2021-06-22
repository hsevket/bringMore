import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getCartItems,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal
} from "../../services/CartService";
import { useEffect } from "react";
import { removeFromCart } from "../../services/CartService";
import Wrapper from "../Wrapper";



function Basket({ isRender }) {
  const [cart, setCart] = useState(getCartItems());

  const handleRemove = (e) => {
    removeFromCart(e.target.parentNode.id);
    setCart(getCartItems());
  };

  const handleIcrease = (name) => {
    increaseQuantity(name);
    setCart(getCartItems());
  };

  const handleDecrease = (name) => {
    decreaseQuantity(name);
    setCart(getCartItems());
  };

  useEffect(() => setCart(getCartItems()), [isRender]);
  return (
    <Wrapper>
      <div>
        <h1>Shopping Basket</h1>
      </div>
      <div>
        {!cart.length && (
          <h1>
            Basket is Empty
            <br />
            <p>please add a product to basket</p>
          </h1>
        )}
        <ul>
          {cart.map((i) => {
            return (
              <li id={i.name}>
                {i.name}{" "}
                <button onClick={() => handleDecrease(i.name)}>-</button>{" "}
                {i.quantity}{" "}
                <button onClick={() => handleIcrease(i.name)}>+</button> x{" "}
                {i.qty}&euro; = {i.quantity * i.qty}
                &euro;
                <button onClick={(e) => handleRemove(e)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Total Price: {calculateTotal()}  &euro; </p>
        <Link to="/checkout"> <button> check out </button></Link>
      </div>
    </Wrapper>
  );
}

export default Basket;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCartItems, calculateTotal } from "../services/CartService";
import Button from "../components/Button";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  div:first-child {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: center !important;
    background-color: #4b3398;
    height: 10%;
    width: 100%;
    color: #ffd302;
    font-size: 28px;
    font-family: Bangers;
    font-weight: 500;
  }
  div {
    height: 80%;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
      background-color: whitesmoke;
    }

    ul {
      display: flex;
      flex-direction: column;
      

      li {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #333333;
        font-size: 16px;
        text-transform: capitalize;
        cursor: pointer;
        margin: 10px;
      }
      button {
        border: 1px solid gray;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: #4b3398;
          color: #ffd302;
        }
      }
    }
  }
  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4b3398;
    height: 10%;
    width: 100%;
    color: #ffd302;
    align-self: flex-end;
  }
`;

const List = () => {
  const cart = getCartItems();
  const Date = moment().format(" Do MMMM YYYY, h:mm:ss a");
  localStorage.setItem(Date, JSON.stringify(cart));

  return (
    <Container>
      <div>
        <h1>Order List</h1>
      </div>
      <div>
        {!cart.length && (
          <h1>
            Basket is Empty
            <br />
            <p>please add a product to basket</p>
          </h1>
        )}
        <h1>{Date}</h1>
        <ul>
          {cart.map((i) => {
            return (
              <li id={i.name}>
                <span>{i.name}</span>
                <span>
                  {i.quantity} x {i.qty}&#128;
                </span>{" "}
                =<span>{i.quantity * i.qty} &#128;</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Total Price: {calculateTotal()} &#128; </p>

        <Link to="/orderComplete">
          <Button>complete the order</Button>
        </Link>
      </div>
    </Container>
  );
};

export default List;

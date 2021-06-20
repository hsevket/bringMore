import styled from "styled-components";
import Button from "../Button";


const Card = styled.div`
  width: 95px;
  height: 200px;
  margin: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid gray;
  background: #4b3398;
  color: #ffd302;
  border-radius: 5px;
  img {
    height: 45%;
  }

  div {
    margin: 1px;
    padding: 2px;
    align-self: center;
  }
`;

export default function ShoppingCard({ image, title, price, onAdd }) {

  return (
    <Card>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{price} &#128;</div>
      <Button onClick = {onAdd}>+Add</Button>
    </Card>
  );
}

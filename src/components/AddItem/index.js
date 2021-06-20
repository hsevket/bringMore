import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ListItemType } from "../../services/ItemService";
import swal from 'sweetalert';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 500px;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 600px;
  border: 1px solid gray;
  border-radius: 5px;
  div {
    margin-bottom: 100px;
    width: 60%;
    text-align: center;
    cursor: pointer;
    border: 1px solid #dadada;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    text-transform: capitalize;
  }
`;
const Input = styled.input`
  width: 60%;
  cursor: pointer;
  border: 1px solid #dadada;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #6c809a;
  width: 60%;
  border-radius: 4px;
  padding: 10px 10px;
  border: 2px solid #6c809a;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #6c809a;
    color: #fff;
  }
`;

export default function AddItem(props) {
  const [input, setInput] = useState();
  const [price, setPrice] = useState();
  const [newItem, setNewItem] = useState();
  const [sendData, setSendData] = useState(1)

  const handleAdd = () => {
    if(!props.CategoryName){
        swal('Please Choose a Category');
        setInput("");
        setPrice("")
        return;
    }
    setNewItem(() => new ListItemType(input, price));
    setSendData(sendData+1);
    props.setRender(sendData);
    setInput("");
    setPrice("")
  };

  useEffect(() => {
    fetch(
      `https://ic5t082w58.execute-api.eu-west-1.amazonaws.com/production/api/v1/29052017/${props.CategoryId}`,
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    )
      .then((response) => {if(response.status === 201){swal("Item has been saved" )}})
      .catch((error) => {
        console.error("Error:", error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendData]);

  return (
    <Container>
      {props.CategoryName ? <div>{props.CategoryName}</div>: <div>Please Choose a Category</div>}
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Please Enter an Item Name" />
      <Input value={price}  onChange={(e) => setPrice(e.target.value)} placeholder="Please Enter the Item's Price" type="number"/>
      <Button onClick={() => handleAdd()}>addItem</Button>
    </Container>
  );
}

import { Link } from "react-router-dom";
import styled from "styled-components";

const Message = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: Bangers;
  font-weight: 500;
  background: #4b3398;
  color: #ffd302;
  border-radius: 5px;
  button {
    cursor: pointer;
    
      background-color: #ffd302;
      color: #4b3398;
      border-radius: 5px;
      font-family: Bangers;
      font-size: 20px;
      &:hover{
        background-color: #4b3398;
      color: #ffd302;
      }
    }
  
`;

 function OrderCompleted  (){
 localStorage.removeItem("Current Order");   
    
    
 return (
     
     <Message>
     <div>congragulation your order is completed</div>
    <Link to="/"><button>to home page</button></Link> 
     </Message>
 )
 
}

export default OrderCompleted;
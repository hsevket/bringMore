import styled from "styled-components";

const Card = styled.div`
  width: 65px;
  height: 65px;
  margin: 20px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  text-transform: capitalize;
  &:hover{
    background: #4b3398;
  color: #ffd302;
  }
  img {
    height: 45%;
  }

  div {
    margin: 1px;
    padding: 2px;
    align-self: center;
  }
`;


export default function CategoryCard({ image, title, onSetCategory }) {
  return (
    
      <Card
      onClick={onSetCategory}      >
        <img src={image} alt={title} />
        <div>{title}</div>
      </Card>
    
  );
}

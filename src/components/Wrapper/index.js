import styled from "styled-components";


const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 3px 3px gray 0.3;
  width: 400px;
  height: 550px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 200px;
  justify-content: flex-start;
  caret-color: transparent;
  background-color: whitesmoke;

  div:first-child {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: center !important;
    background-color: #4b3398;
    height: 10%;
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

    button {
      height: 50%;
      width: auto;
      margin: 5px;
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
  }
`;

export default Wrapper;
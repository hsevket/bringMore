import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #eaece5;
position: sticky;
  top: 60px;

`;

export default function CategoryContainer ({children}) {

    return (
        <Container>{children}</Container>
    )
}
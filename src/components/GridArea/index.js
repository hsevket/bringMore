/* eslint-disable react/prop-types */
import styled from "styled-components";
import Basket from "../Basket"


const Grid = styled.section`
  display: grid;
  justify-content: space-between;
  height: auto;
  background-color: #eaece5;
  gap: 24px;
  grid-template-columns: 5fr 1fr;
  
  
  grid-template-areas:
    "itemone  itemtwo" ;


    section{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      
    }
`;

const GridArea = ({children, isRender}) => 
 ( 
        <Grid>
          <section gridarea="itemone">{children} </section>
          <Basket isRender= {isRender} gridarea="itemtwo"/>
          
        </Grid>);



export default GridArea;
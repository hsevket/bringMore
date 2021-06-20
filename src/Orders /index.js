
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    marginLeft: 300,
    paddingTop: 100,
    background: "#4b3398",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    background: "#4b3398",
    color: "#ffd302",
  },

  items: {
    background: "#ffd302",
    color: "#4b3398",
  },
}));

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left:150px;
  li {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #4b3398;
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    margin: 10px;
  }
  li:last-child {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #4b3398;
    color: #ffd302;
    font-size: 24px;
    text-transform: capitalize;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
  }
`;

export default function OrdersList() {
  const classes = useStyles();
  const [render, setRender] = useState(1)
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  
    
  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  

  const handleRemove = (i) => {
    localStorage.removeItem(keys[i]);
    values.filter(e => e[i] );
    setRender(render + 1);
  };
  return (
    <div className={classes.root}>
      {values.map((items, i) => (
        <Accordion className={classes.heading}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{background: "white", borderRadius: "50%" }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: 24 }}>{keys[i]}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.items}>
            <List>
              {items.map((i) => (
                <li id={i.name}>
                  <span>{i.name}</span>
                  <span>
                    {i.quantity} x {i.qty}&#128;
                  </span>{" "}
                  =<span>{i.quantity * i.qty} &#128;</span>
                </li>
              ))}
              <li>
                <span>Total:</span>
                <span>
                  {" "}
                  {items.reduce(
                    (acc, current) => acc + current.quantity * current.qty,
                    0
                  )}
                  &#128;
                </span>
                <Button onClick={() => handleRemove(i)}>Delete Order</Button>
              </li>
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

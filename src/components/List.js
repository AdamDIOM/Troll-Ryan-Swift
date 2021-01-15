import "./List.css";
import ListItem from "./ListItem";
import React, { useState } from 'react';
import { Row, Col, Button } from "react-bootstrap";
//import { Button } from 'bootstrap';

function List() {
  const [trolls, setTrolls] = useState([
    "Send Ryan a BLAHAJ",
    "Heckle Ryan on stream when he is concentrating",
    "Pretend he doesn't exist when he needs something urgently",
    "cry"
  ]);
  const [newTroll, setNewTroll] = useState("");


  const listItems = trolls.map((troll) =>
  <ListItem key={troll} item={troll}/>
  );



  function addToTrolls(troll){
    const currentTrolls = [...trolls];
    currentTrolls.push(troll);
    setTrolls(currentTrolls);
  };

    return (
      <div className="list-container">
        <h2 className="list-header">My trolls for Ryan in 2021</h2>
        <Row>
          <Col xs={12} md={9}>
            <input 
              placeholder="Type a new troll here..." 
              className="list-input" 
              value={newTroll} 
              onChange={e => setNewTroll(e.target.value)}
              />
          </Col>
          <Col xs={12} md={3}>
            <Button size="lg" block className="submit-button" onClick={() => {addToTrolls(newTroll); setNewTroll("")}}>Add Troll</Button>
          </Col>
        </Row>
        
        {listItems}
      </div>
    );
  }
  
  export default List;
  
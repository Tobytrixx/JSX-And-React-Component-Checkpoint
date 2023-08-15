/*import utilized components*/
import React from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import jsonObj from "./components/product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
let plainObj = JSON.parse(jsonObj); /* distringify JSON object*/

function App() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plainObj.image} />
      <Card.Body>
        <Card.Title> 
          <Name name = {plainObj.name}/> 
        </Card.Title>
        <Card.Text>
        <Description description = {plainObj.description}/>
        </Card.Text>
        <Card.Text>
        <Price price = {plainObj.price}/>
        </Card.Text>
      </Card.Body>
    </Card>
    <div>
        <h2>Hello there!</h2>
      </div>

    </div>
  )
}

export default App;
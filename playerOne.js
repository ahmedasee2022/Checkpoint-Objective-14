import React from "react";
import Card from "react-bootstrap/Card";

const player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://example.com/messi.jpg"/>
      <Card.Body>
        <Card.Title>Lionel Messi</Card.Title>
        <Card.Text>
          Team: Paris Saint-Germain<br/>
          Nationality: Argentina<br/>
          Jersey Number: 30 <br/>
          Age: 34
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


export default player
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://example.com/pele.jpg" />
      <Card.Body>
        <Card.Title>Pelé</Card.Title>
        <Card.Text>
          Team: Retired <br/>
          Nationality: Brazil <br/>
          Jersey Number:10 <br/>
          Age: 80
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
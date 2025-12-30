import React from 'react';
import './Card.css';
import { Card } from "@heroui/react";

function Cards (props) {

    return (
      <div className="card">
        <Card className="card-clickable" variant="outlined" size="lg">
          {props.title}
        </Card>
      </div>
    )

}

export default Cards;
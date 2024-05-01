import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';

class Cards extends Component {
    render() {
        return <div className="Cards">
          {this.props.cards.map((c, idx) =>
            <Card
                image={c.image}
                key={c.id}
                name={c.name}
            />
          )}
        </div>
      }
}

export default Cards;
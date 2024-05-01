import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            deckId: null,
            remaining: null,
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            const deckId = response.data.deck_id;
            const remaining = response.data.remaining;
            this.setState({ deckId, remaining });
        } catch (e) {
            console.log("Error shuffling deck:", e);
        }
    }

    async getCard() {
        try {
            const response = await axios.get(`${API_BASE_URL}/${this.state.deckId}/draw/`);
            if(!response.data.success) {
                throw new Error("No card remaining!");
            }
            const card = response.data.cards[0];
            this.setState(prevstate => ({
                cards: [
                    ...prevstate.cards,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }],
                remaining: response.data.remaining,
            }))
        } catch (e) {
            alert(e);
        }
    }

    render() {
        return (
            <div className='Deck'>
                <h1 className='Deck-title'>Card Dealer</h1>
                <h2 className='Deck-subtitle'>A Little Demo Made with React</h2>
                <button className='Deck-btn' onClick={this.getCard}>Deal Me a Card!</button>
                <Cards cards={this.state.cards}/>
            </div>
        )
    }
}

export default Deck;
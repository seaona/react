import React, { Component } from 'react';
import './Pokecard.css';


const baseImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component {
    
    render() {
        let imgSrc = `${baseImgUrl}${this.props.id}.png`
        {console.log("PROOOP")}
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img className="Pokecard-img" src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;
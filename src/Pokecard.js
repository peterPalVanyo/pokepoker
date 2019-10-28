import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let threeDigit = (number) => (number < 1000 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component{
     render() {
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                    <img src={`${POKE_API}${threeDigit(this.props.id)}.png`} alt='pokemon'/>
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>

            </div>
        )
     }
}


export default Pokecard
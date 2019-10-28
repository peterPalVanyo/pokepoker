import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let threeDigit = (number) => (number < 1000 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component{
     render() {
        const id = idChecker(this.props.id)
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <img src={`${POKE_API}${threeDigit(this.props.id)}.png`} alt='pokemon'/>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>

            </div>
        )
     }
}

function idChecker(id) {
    if(id < 10) {
        return '00' + id
    } else if(id > 9 && id < 100) {
        return '0' + id
    } else return id
}

export default Pokecard
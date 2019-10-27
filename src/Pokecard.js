import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component{
     render() {
        const id = idChecker(this.props.id)
        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={`${POKE_API}${id}.png`} alt='pokemon'/>
                <h3>Type: {this.props.type}</h3>
                <h3>EXP: {this.props.exp}</h3>

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
import React, {Component} from 'react';
import Pokecard from './Pokecard'
import './Pokepack.css'


class Pokepack extends Component {
    render() {
        let title
        if(this.props.isWinner) {
            title = <h1 className='Pokepack-winner'>Winning Hand</h1>
        } else {
            title = <h1 className='Pokepack-loser'>Loser Hand</h1>
        }
        return (
            <div className='Pokepack'>
                {title}
                <h3>Total Experience: {this.props.score}</h3>
                <div className='Pokepack-cards'>
                    {this.props.pokemons.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokepack
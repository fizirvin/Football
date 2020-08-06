import React from 'react';
import { connect } from 'react-redux'

const Players = ({players, addTitular, addReplacement}) =>(
    <section>
        <h2>Players</h2>
        <div className='players-container'>
            {
                players.map(player =>(
                    <article key={player.id}>
                        <img src={player.foto} alt={player.nombre}/>
                        <h3>{player.nombre}</h3>
                        <div>
                            <button onClick={() =>addTitular(player)}>Team</button>
                            <button onClick={() =>addReplacement(player)}>Replacement</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

// recibe el estado y regresa un objecto
const mapStateToProps = state =>({
    players: state.players
})

const mapDispatchToProps = dispatch =>({
    addTitular(player){
        dispatch({
            type: 'ADD_TITULAR',
            player
        })
    },
    addReplacement(player){
        dispatch({
            type: 'ADD_REPLACEMENT',
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players);

// la función conect recibe dos funciones, la
// primera es una función que mapea lo que hay en el estado y lo convierte en propiedades
//la segunda es una función que mapea las funciones que se llaman dispatches y las convierte en propiedades
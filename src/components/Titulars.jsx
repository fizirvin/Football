import React from 'react';
import { connect } from 'react-redux'

const Titulars= ({titulars, removeTitular}) =>(
  <section>
    <h2>Titulars</h2>
    <div>
        {
            titulars.map(player =>(
                <article key={player.id}>
                    <div>
                        <img src={player.foto} alt={player.nombre}/>
                        <button onClick={() =>removeTitular(player)}>X</button>
                    </div>
                    <p>{player.nombre}</p>
                </article>
            ))
        }
    </div>
  </section>
)

const mapStateToProps = state =>({
    titulars: state.titulars
})

const mapDispatchToProps = dispatch =>({
    removeTitular(player){
        dispatch({
            type: 'REMOVE_TITULAR',
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulars);
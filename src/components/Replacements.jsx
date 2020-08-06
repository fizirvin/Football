import React from 'react';
import { connect } from 'react-redux'

const Replacements= ({replacements, removeReplacement}) =>(
  <section>
    <h2>Replacements</h2>
    <div>
        {
            replacements.map(player =>(
                <article ker={player.id}> 
                    <div>
                        <img src={player.foto} alt={player.nombre}/>
                        <button onClick={() =>removeReplacement(player)}>X</button>
                    </div>
                    <p>{player.nombre}</p>
                </article>
            ))
        }
    </div>
  </section>
)

const mapStateToProps = state =>({
    replacements: state.replacements
})

const mapDispatchToProps = dispatch =>({
    removeReplacement(player){
        dispatch({
            type: 'REMOVE_REPLACEMENT',
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Replacements);
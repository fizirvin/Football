import { createStore } from 'redux'

// el reducer recibe el estado actual y el objeto 'action' que indica qué cambio debe efectuar en el estado
// después de modificar el estado retorna un nuevo estado

const initialState = {
    players: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
        },
        {
            id: 5,
            nombre: "Andrés Muquinche",
            foto: "https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg"
        }
    ],
    titulars: [],
    replacements: [] 
}

const reducerManager = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_TITULAR' :
            return {
                ...state,
                // titulars: state.titulars.concat(action.player),
                titulars: [...state.titulars, action.payload],
                players: state.players.filter( j => j.id !== action.payload.id)
            }
        case 'ADD_REPLACEMENT' :
            return {
                ...state,
                replacements: state.replacements.concat(action.payload),
                players: state.players.filter( j => j.id !== action.payload.id)
            }
        case 'REMOVE_TITULAR' :
            return {
                ...state,
                titulars: state.titulars.filter( j => j.id !== action.payload.id),
                players: state.players.concat(action.payload)
            } 
        case 'REMOVE_REPLACEMENT' :
            return {
                ...state,
                replacements: state.replacements.filter( j => j.id !== action.payload.id),
                players: state.players.concat(action.payload)
            }
        default : 
            return state    
    }

    // if(action.type === 'ADD_TITULAR'){
    //     return {
    //         ...state,
    //         titulars: state.titulars.concat(action.player),
    //         players: state.players.filter( j => j.id !== action.player.id)
    //     }
    // }
    // if( action.type === 'ADD_REPLACEMENT' ){
    //     return {
    //         ...state,
    //         replacements: state.replacements.concat(action.player),
    //         players: state.players.filter( j => j.id !== action.player.id)
    //     }
    // }
    // if( action.type === 'REMOVE_TITULAR' ){
    //     return {
    //         ...state,
    //         titulars: state.titulars.filter( j => j.id !== action.player.id),
    //         players: state.players.concat(action.player)
    //     }
    // }
    // if( action.type === 'REMOVE_REPLACEMENT' ){
    //     return {
    //         ...state,
    //         replacements: state.replacements.filter( j => j.id !== action.player.id),
    //         players: state.players.concat(action.player)
    //     }
    // }
    // return state
}


export default createStore(reducerManager); // recibe como parámetro la función encargada de hacer cambios en la aplicación (reducer)
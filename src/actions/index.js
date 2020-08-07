
const addTitular = player =>{
    return {
        type: 'ADD_TITULAR',
        payload: player
    }
}

const addReplacement = player =>{
    return{
        type: 'ADD_REPLACEMENT',
        payload: player
    }
}

const removeTitular = player =>{
    return{
        type: 'REMOVE_TITULAR',
        payload: player
    }
}

const removeReplacement = player =>{
    return{
        type: 'REMOVE_REPLACEMENT',
        payload: player
    }
}

export {
    addTitular,
    addReplacement,
    removeTitular,
    removeReplacement
}
import {createStore} from 'redux'

let INITIAL_VALUE = {
    count: 0,
    privacy: false
}

const counterReducer = (store = INITIAL_VALUE, action) => {
    if(action.type == 'increment') {
        return {...store, count: store.count + 1}
    }
    else if(action.type == 'decrement') {
        return {...store, count: store.count - 1}
    }
    else if(action.type == 'ADD') {
        return {...store, count: store.count + action.payload.num}
    }
    else if(action.type == 'SUB') {
        return {...store, count: store.count - action.payload.num}
    }
    else if(action.type == 'PRIVACY') {
        return {...store, privacy: !store.privacy}
    }

    return store
}

const counterStore = createStore(counterReducer)

export default counterStore
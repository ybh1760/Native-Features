import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import { init } from './helpers/db'
import { placeReducer } from './store/place-redcers'
import PlaceNavigator from './navigation/PlaceNavigator'

init()
    .then(() => {
        console.log('initailize Database')
    })
    .catch(err => {
        console.log('not initailzed Database')
        console.log(err)
    })

const rootReducer = combineReducers({
    place: placeReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
    return (
        <Provider store={store}>
            <PlaceNavigator />
        </Provider>
    )
}

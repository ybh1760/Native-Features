import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import { placeReducer } from './store/place-redcers'
import PlaceNavigator from './navigation/PlaceNavigator'

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

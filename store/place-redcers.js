import { ADD_PLACE } from './place-actions'
import Place from '../models/Place'

const initialState = {
    place: [],
}

export const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                new Date().toString(),
                action.placeData.title
            )
            return {
                place: state.place.concat(newPlace),
            }
        default:
            return state
    }
}

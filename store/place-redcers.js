import { ADD_PLACE } from './place-actions'
import Place from '../models/Place'

const initialState = {
    places: [],
}

export const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                new Date().toString(),
                action.placeData.title,
                action.placeData.image
            )
            return {
                places: state.places.concat(newPlace),
            }
        default:
            return state
    }
}

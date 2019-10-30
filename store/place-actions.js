import * as FileSystem from 'expo-file-system'

import { insertPlace, fetchPlace } from '../helpers/db'

export const SET_PLACES = 'SET_PLACES'
export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath,
            })
            const dbResult = await insertPlace(
                title,
                newPath,
                'no address',
                15.6,
                12.4
            )

            dispatch({
                type: ADD_PLACE,
                placeData: {
                    id: dbResult.insertId,
                    title: title,
                    image: newPath,
                },
            })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export const setPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlace()
            dispatch({ type: SET_PLACES, places: dbResult.rows._array })
        } catch (err) {
            throw err
        }
    }
}

import * as FileSystem from 'expo-file-system'

import ENV from '../env'
import { insertPlace, fetchPlace } from '../helpers/db'

export const SET_PLACES = 'SET_PLACES'
export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleApiKey}`
        )

        if (!response.ok) {
            throw new Error('Geocoding occured Errors')
        }
        const resData = response.json()
        if (!resData.results) {
            throw new Error('results of response is not existed')
        }
        const address = resData.results[0].formatted_address

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
                address,
                location.lat,
                location.lng
            )

            dispatch({
                type: ADD_PLACE,
                placeData: {
                    id: dbResult.insertId,
                    title: title,
                    image: newPath,
                    address: address,
                    coords: {
                        lat: location.lat,
                        lng: location.lng,
                    },
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

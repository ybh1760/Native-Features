import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function MapScreen(props) {
    const [selectedLocation, setSelectedLocation] = useState()

    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }

    let markerCoordinate
    if (selectedLocation) {
        markerCoordinate = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
        }
    }

    return (
        <MapView
            style={styles.map}
            region={mapRegion}
            onPress={selectLocationHandler}
        >
            {markerCoordinate && (
                <Marker title="Picked Location" coordinate={markerCoordinate} />
            )}
        </MapView>
    )
}

MapScreen.navigationOptions = {
    headerTitle: 'Map',
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})

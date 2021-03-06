import React, { useState, useCallback, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Alert,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Colors from '../constants/Colors'

export default function MapScreen(props) {
    const initialLocation = props.navigation.getParam('initialLocation')
    const readOnly = props.navigation.getParam('readOnly')
    const [selectedLocation, setSelectedLocation] = useState(initialLocation)

    const mapRegion = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lng : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const saveSelectedLocation = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert(
                'Pick Location',
                'you have to pick location before saving',
                [{ text: 'Okay' }]
            )
            return
        }
        props.navigation.navigate('New', { pickedLocation: selectedLocation })
    }, [selectedLocation])

    useEffect(() => {
        props.navigation.setParams({ saveLocation: saveSelectedLocation })
    }, [saveSelectedLocation])

    const selectLocationHandler = event => {
        if (readOnly) {
            return
        }
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

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation')
    const readOnly = navData.navigation.getParam('readOnly')

    return {
        headerTitle: 'Map',
        headerRight: readOnly ? null : (
            <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
                <Text style={styles.headerButtonText}>Save</Text>
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    headerButton: { marginHorizontal: 15 },
    headerButtonText: {
        color: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
})

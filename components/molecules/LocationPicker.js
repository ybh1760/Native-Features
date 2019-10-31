import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Button,
    Alert,
} from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import Colors from '../../constants/Colors'
import MapPreview from '../../components/molecules/MapPreview'

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false)
    const [location, setLocation] = useState()
    const pickedLocation = props.navigation.getParam('pickedLocation')

    useEffect(() => {
        if (pickedLocation) {
            setLocation(pickedLocation)
        }
    }, [pickedLocation])

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if (result.status !== 'granted') {
            Alert.alert(
                'Insuffient Permissions',
                'you need to grant gps permission',
                [{ text: 'Okay' }]
            )
            return false
        }
        return true
    }

    const getLocation = async () => {
        setIsFetching(true)
        const hasPermission = verifyPermissions()
        if (!hasPermission) return
        try {
            const result = await Location.getCurrentPositionAsync({
                timeout: 5000,
            })

            setLocation({
                lat: result.coords.latitude,
                lng: result.coords.longitude,
            })
        } catch (err) {
            throw err
        }
        setIsFetching(false)
    }

    const pickOnMapHandler = () => {
        props.navigation.navigate('Map')
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview
                onPress={pickOnMapHandler}
                style={styles.locationMap}
                location={location}
            >
                {isFetching ? (
                    <ActivityIndicator size="large" color={Colors.primary} />
                ) : (
                    <Text>no location picked!</Text>
                )}
            </MapPreview>
            <View style={styles.actions}>
                <Button
                    title="Get Location"
                    color={Colors.primary}
                    onPress={getLocation}
                />
                <Button
                    title="Pick on Map"
                    color={Colors.primary}
                    onPress={pickOnMapHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
        alignItems: 'center',
    },
    locationMap: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        height: 200,
    },
    actions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default LocationPicker

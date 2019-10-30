import React, { useState } from 'react'
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

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false)
    const [location, setLocation] = useState()

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

    return (
        <View style={styles.locationPicker}>
            <View style={styles.locationMap}>
                {isFetching ? (
                    <ActivityIndicator size="large" color={Colors.primary} />
                ) : (
                    <Text>no location picked!</Text>
                )}
            </View>
            <Button
                title="Get Location"
                color={Colors.primary}
                onPress={getLocation}
            />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LocationPicker

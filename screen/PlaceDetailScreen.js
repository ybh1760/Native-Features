import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { useSelector } from 'react-redux'

import Colors from '../constants/Colors'
import MapPreview from '../components/molecules/MapPreview'

const PlaceDetailScreen = props => {
    const placeId = props.navigation.getParam('placeId')
    const place = useSelector(state =>
        state.place.places.find(pl => pl.id === placeId)
    )

    const mapPreviewHandler = () => {
        props.navigation.navigate('Map', {
            readOnly: true,
            initialLocation: { lat: place.lat, lng: place.lng },
        })
    }

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={{ uri: place.imageUri }} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{place.address}</Text>
                </View>
                <MapPreview
                    location={{ lat: place.lat, lng: place.lng }}
                    style={styles.mapPreview}
                    onPress={mapPreviewHandler}
                />
            </View>
        </ScrollView>
    )
}

PlaceDetailScreen.navigationOptions = navData => {
    return { headerTitle: navData.navigation.getParam('title') }
}

const styles = StyleSheet.create({
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
        backgroundColor: '#ccc',
    },
    locationContainer: {
        marginVertical: 20,
        width: '90%',
        maxWidth: 350,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary,
        textAlign: 'center',
    },
    mapPreview: {
        width: '100%',
        maxWidth: 350,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})

export default PlaceDetailScreen

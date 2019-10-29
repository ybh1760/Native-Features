import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PlaceListScreen() {
    return (
        <View style={styles.screen}>
            <Text>Place List Screen</Text>
        </View>
    )
}

PlaceListScreen.navigationOptions = {
    headerTitle: 'Place List',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

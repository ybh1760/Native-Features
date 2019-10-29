import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MapScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Map Screen</Text>
        </View>
    )
}

MapScreen.navigationOptions = {
    headerTitle: 'Map',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

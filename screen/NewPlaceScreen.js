import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NewPlaceScreen() {
    return (
        <View style={styles.screen}>
            <Text>ADD New Place Screen</Text>
        </View>
    )
}
NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

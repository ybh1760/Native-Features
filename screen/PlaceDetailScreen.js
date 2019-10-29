import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PlaceDetailScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Place Detail Screen</Text>
        </View>
    )
}

PlaceDetailScreen.navigationOptions = navData => {
    return { headerTitle: navData.navigation.getParam('title') }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

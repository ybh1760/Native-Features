import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PlaceDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text></Text>
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

export default PlaceDetailScreen

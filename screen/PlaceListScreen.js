import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/atoms/HeaderButton'

export default function PlaceListScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Place List Screen</Text>
        </View>
    )
}

PlaceListScreen.navigationOptions = props => {
    return {
        headerTitle: 'Place List',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="add"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        props.navigation.navigate('New')
                    }}
                />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

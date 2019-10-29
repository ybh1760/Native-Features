import React from 'react'
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../components/atoms/HeaderButton'
import PlaceItem from '../components/molecules/PlaceItem'

export default function PlaceListScreen(props) {
    const placeList = useSelector(state => state.place.places)

    const renderPlace = itemData => {
        return (
            <PlaceItem
                image={null}
                title={itemData.item.title}
                address={''}
                onSelect={() => {
                    props.navigation.navigate('Detail', {
                        title: itemData.item.title,
                        id: itemData.item.id,
                    })
                }}
            />
        )
    }

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={placeList}
            renderItem={renderPlace}
        />
    )
}

PlaceListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Place List',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="add"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('New')
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

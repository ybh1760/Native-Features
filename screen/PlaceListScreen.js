import React, { useEffect } from 'react'
import { StyleSheet, Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/atoms/HeaderButton'
import PlaceItem from '../components/molecules/PlaceItem'
import * as placeActions from '../store/place-actions'

export default function PlaceListScreen(props) {
    const placeList = useSelector(state => state.place.places)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(placeActions.setPlaces())
    }, [])

    const renderPlace = itemData => {
        return (
            <PlaceItem
                image={itemData.item.imageUri}
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

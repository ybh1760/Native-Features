import React, { useState, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
} from 'react-native'
import { useDispatch } from 'react-redux'

import * as placeActions from '../store/place-actions'
import Colors from '../constants/Colors'
import ImagePicker from '../components/molecules/ImageSelector'
import LocationPicker from '../components/molecules/LocationPicker'

export default function NewPlaceScreen(props) {
    const [title, setTitle] = useState('')
    const [selectedImage, setSelectedImage] = useState()
    const [selectedLocation, setSelectedLocation] = useState()
    const dispatch = useDispatch()

    const titleChangeHandler = text => {
        setTitle(text)
    }
    const savePlaceHandler = () => {
        dispatch(placeActions.addPlace(title, selectedImage, selectedLocation))
        props.navigation.goBack()
    }
    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }
    const locationHandler = useCallback(location => {
        setSelectedLocation(location)
    }, [])

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.inputText}
                    value={title}
                    onChangeText={titleChangeHandler}
                />
                <ImagePicker onImageTaken={imageTakenHandler} />
                <LocationPicker
                    navigation={props.navigation}
                    onPickedLocation={locationHandler}
                />
                <Button
                    title="Save Place"
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place',
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    label: {
        fontSize: 16,
    },
    inputText: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 2,
        marginBottom: 15,
    },
})

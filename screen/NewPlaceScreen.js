import React, { useState } from 'react'
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

export default function NewPlaceScreen(props) {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const titleChangeHandler = text => {
        setTitle(text)
    }
    const savePlaceHandler = () => {
        dispatch(placeActions.addPlace(title))
        props.navigation.goBack()
    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.inputText}
                    value={title}
                    onChangeText={titleChangeHandler}
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

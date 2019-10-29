import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Button,
} from 'react-native'

import Colors from '../constants/Colors'

export default function NewPlaceScreen(props) {
    const [title, setTitle] = useState('')

    const titleChangeHandler = text => {
        setTitle(text)
    }
    const submitHandler = () => {
        // redux에 저장
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
                    onPress={submitHandler}
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

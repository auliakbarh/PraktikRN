import React, { useState } from 'react'
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native'

const ChallengeScreen = () => {
    const [selected, setSelected] = useState(false)

    const handlerOnPress = () => {
        setSelected(prevState => !prevState)
    }

    return (
        <SafeAreaView style={styles.fill}>
            <View style={[styles.fill, styles.center]}>
                <TouchableOpacity onPress={handlerOnPress} style={[styles.center, styles.radioButtonContainer, selected && styles.selectedBorderColor]}>
                    <View style={[styles.radioButtonIndicator, selected && styles.selectedColor]} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonContainer: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        borderWidth: 3,
        borderColor: '#000',
    },
    radioButtonIndicator: {
        width: 15,
        height: 15,
        borderRadius: 15,
    },
    selectedBorderColor: {
        borderColor: 'red',
    },
    selectedColor: {
        backgroundColor: 'red',
    },
})

export default ChallengeScreen

import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import CounterButtons from '../components/molecules/Buttons';

const CounterScreen = () => {
    const [valueCounter, setValueCounter] = useState(0)
    const [userData, setUserData] = useState({ name: ''})
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        console.log('use effect triggered') // did mount & did update
        return () => console.log('unmounted') // component will unmount
    }, [valueCounter]) // dep for did update

    useEffect(() => {
        setLoading(true)
        console.log('fetch data user')
        setTimeout(() => {
            console.log('get data user')
            setUserData({ name: 'Akbar' })
            setLoading(false)
        }, 5000)
    }, [])

    const inc = () => {
        setValueCounter(prevState => {
            console.log('prevState', prevState);
            return prevState + 1;
        })
        console.log('increment', valueCounter)
    }

    const dec = () => {
        valueCounter -= 1
        setValueCounter(prevState => {
            console.log('dec prev state', prevState)
            return valueCounter
        })
        console.log('decrement', valueCounter)
    }

    const reset = () => {
        setValueCounter(0)
    }

    if (isLoading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size='large' color='blue' />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.containter}>
                <Text style={styles.title}>{`Simple ${userData.name}'s App Counter in React Native`}</Text>
                <Text style={styles.counterText}>{valueCounter}</Text>
                <CounterButtons onPressInc={inc} onPressDec={dec} />
                <Button title={'Reset'} color='#841584' onPress={reset} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter: {
        padding: 24,
    },
    title: {
        fontSize: 24, // font-size: 24 => in RN using camelCase
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center',
        marginBottom: 24,
    },
    counterText: {
        fontSize: 82, // font-size: 24 => in RN using camelCase
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center',
    },
})

export default CounterScreen

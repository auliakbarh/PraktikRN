import React, {useState} from "react";
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, RefreshControl } from 'react-native';

const SimpleFormScreen = () => {
    const [value, setValue] = useState('Here text from state')
    const [isValid, setValid] = useState(false)

    const handlerTextInput = (inputValue) => {
        console.log(inputValue)
        if (inputValue.length > 10) {
            setValue('')
        } else {
            setValue(inputValue)
        }
    }

    const validate = () => {
        if (value === '55555') {
            setValid(true)
        } else {
            setValid(false)
        }
        // if valid do post to API
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log('refresh start')
        setTimeout(() => {
            setRefreshing(false)
            console.log('refresh end')
            setValue('John Doe')
        }, 8000)
    }, []);


    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                contentContainerStyle={{padding: 16, flex: 1}}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
            >
                <Text>Input Some Text</Text>
                <TextInput style={{ borderWidth: 1, height: 90 }} value={value} onChangeText={handlerTextInput} />
                <Button title={'Submit'} onPress={validate} />
                <Text>{`is Valid? = ${isValid}`}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SimpleFormScreen
import React from 'react'
import {View, SafeAreaView, Text} from 'react-native'

const ListScreen = () => {
    const listNumbers = [1,2,3,4,5]
    /*
        listNumbers.map(item => item + 1)

        [2,3,4,5,6]
    */

    return (
        <SafeAreaView>
            <View>
                {
                    listNumbers.map((item, index) => <Text key={String(index)}>{item}</Text>)
                    /*
                    [
                        <Text>1</Text>,
                        <Text>2</Text>,
                        <Text>3</Text>,
                        ...
                    ]
                    */
                }
                {[
                    <Text>Hello</Text>,
                    <Text>World</Text>,
                ]}
                <Text>Fisrt</Text>
                <Text>Second</Text>
            </View>
        </SafeAreaView>
    )
}

export default ListScreen
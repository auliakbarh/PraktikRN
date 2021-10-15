import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native'
import axios from 'axios'

const DataFetchingScreen = () => {
    const [isLoading, setLoading] = useState(false)
    const [listData, setListData] = useState([])

    const urlGetData = 'https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list'

    const onPressGetData = async () => { // handlerButtonGetData
        setLoading(true)
        const response = await axios.get(urlGetData)
        const { data, status } = response
        if (status === 200 && data) {
            setListData(data.data ?? [])
            setLoading(false)
        }
    }

    useEffect(() => {
        onPressGetData()
    }, [])

    if (isLoading) {
        return (
            <SafeAreaView style={styles.fill}>
            <View style={[styles.fill, styles.center]}>
                <ActivityIndicator size={'large'} />
            </View>
        </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.fill}>
            <View style={[styles.fill, styles.center]}>
                <Text>{`Panjang Data: ${listData.length}`}</Text>
                <Text>{`List data pertama: ${listData[0].name}`}</Text>
            </View>
        </SafeAreaView>
    )

    // if (listData.length > 0) {
    //     return (
    //         <SafeAreaView style={styles.fill}>
    //             <View style={[styles.fill, styles.center]}>
    //                 <Text>{`Panjang Data: ${listData.length}`}</Text>
    //             </View>
    //         </SafeAreaView>
    //     )
    // }

    // return (
    //     <SafeAreaView style={styles.fill}>
    //         <View style={[styles.fill, styles.center]}>
    //             <Button title={'Get Data'} onPress={onPressGetData} />
    //         </View>
    //     </SafeAreaView>
    // )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DataFetchingScreen
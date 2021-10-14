import React from 'react'
import {View, SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native'

const FlatListScreen = () => {
    const contacts = [{ name: 'John', phoneNumber: '0812344566', id: '1' }, { name: 'Marie', phoneNumber: '081233424343', id: '2' }, { name: 'Diana', phoneNumber: '061234524354', id: '3' }, { name: 'Budi', phoneNumber: '0213745875485', id: '4' }];

    const [isRefresh, setIsRefresh] = React.useState(false)

    const onRefresh = () => {
        console.log('onrefresh')
        setIsRefresh(true)
        setTimeout(() => {
            setIsRefresh(false)
        }, 5000)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <FlatList
                    data={contacts}
                    contentContainerStyle={{flex: 1}}
                    initialNumToRender={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => console.log(item)} style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text>{item.name}</Text>
                                <Text>{item.phoneNumber}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    onRefresh={onRefresh}
                    refreshing={isRefresh}
                />
            </View>
        </SafeAreaView>
    )
}


export default FlatListScreen
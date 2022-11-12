import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons'
import { COLORS } from '../utils/app_constants'

const BookList = ({handleToggleBookPreview, index, data}) => {
  return (
    <Card key={index} style={{padding: 25, marginTop: 10}} elevation={0} onPress={handleToggleBookPreview}>
        <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
        <Image source={{uri: 'https://picsum.photos/700'}}
            style={{width: 150, height: 150, borderRadius: 15}} /> 
        
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
            <View style={{flex: 1, marginLeft: 22}}>
            <Text style={{fontSize: 18}}>Topic</Text>
            <Text style={{fontWeight: '900', fontSize: 18}}>Subrang napakahabang title  para e test  uwuwuwuwuuwuw Paulit ulit NA subrang habaTitle na subrang</Text>
            <Text style={{fontSize: 18}}>Subtitle mo dito</Text>
            </View>
            <View style={{marginLeft: 15}}>
            <Entypo name='chevron-right' size={25} color={COLORS.GRAY}/>
            </View>
        </View>
        </View>
    </Card>
  )
}

export default BookList
import { BottomSheet } from 'react-native-btr';
import { View, StyleSheet, Text, ScrollView, Image, Linking } from 'react-native';
import {WebView} from 'react-native-webview'
import { Appbar, Button, List, TextInput} from 'react-native-paper';
import { COLORS } from '../utils/app_constants';
import { Feather, Octicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';


const BookPreviewBottomSheet = ({navigation, showBookPreview, handleToggleBookPreview}) => {

  const bookPdfFileUrl = 'https://firebasestorage.googleapis.com/v0/b/tcumobilelibrary.appspot.com/o/files%2FAccounting%20Principles.pdf?alt=media&token=c8234262-2488-4ee1-b4db-fabf7b4344a1'

  return (
    <BottomSheet
          visible={showBookPreview}
          onBackButtonPress={handleToggleBookPreview}
          onBackdropPress={handleToggleBookPreview}
        >
          <View style={styles.bottomNavigationView}>
              <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
              <Appbar.Header style={{backgroundColor: COLORS.RED, display: 'flex', alignItems: 'center', width: '100%'}} >
                <Appbar.BackAction onPress={handleToggleBookPreview} size={30}/>
                <Text style={{flex: 1, textAlign: 'center', fontSize: 25, color: COLORS.WHITE}}>Book preview</Text>
                <Button onPress={() => alert('Added to favorites')}>
                  <AntDesign name="sharealt" size={30} color={COLORS.WHITE} />
                </Button>
              </Appbar.Header>
                
                <View style={{paddingTop: 20,paddingHorizontal: 25,flex: 1, flexDirection: 'column', height: 'auto', display: 'flex',alignItems:'center', justifyContent: 'center'}}>
                <Image 
                  source={{uri: 'https://picsum.photos/700'}}
                  style={{width: 150, height: 250, borderRadius: 15, marginBottom: 5}} 
                /> 
                <Text style={{color: COLORS.GRAY}}>By: Author name here</Text>
                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Book title here na mahaba para matest at di magkagulo sa ibang device</Text>
                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                    <Octicons name='download' size={15} color={COLORS.GRAY}/>
                    <Text style={{color: COLORS.GRAY, marginLeft: 5}}>10000 Total downloads</Text>
                  </View>
                  <View style={{display: 'flex', flex: 1, flexDirection: 'row', marginTop: 10}}>
                    <Button 
                      icon={'eye'} 
                      style={{ flex: 1, backgroundColor: COLORS.RED, marginRight: 10}}
                      mode="contained"
                      onPress={() => Linking.openURL(bookPdfFileUrl)}  
                    >
                      Read
                    </Button>
                    <Button style={{ flex: 1}} mode="outlined">
                     <FontAwesome name='heart' size={15} color={COLORS.RED}/>
                     <Text style={{color: COLORS.RED}}>
                        {' '} Add to favorites
                     </Text>
                    </Button>
                  </View>
                  <View style={{flex: 1, paddingTop: 16, marginBottom: 10}}>
                    <Text style={{letterSpacing: .5, color: COLORS.BLACK}}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type and 
                      scrambled it to make a type specimen book. It has survived not only 
                      five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s 
                       with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type and 
                      scrambled it to make a type specimen book. It has survived not only 
                      five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s 
                       with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type and 
                      scrambled it to make a type specimen book. It has survived not only 
                      five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the 1960s 
                       with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </Text>
                  </View>
                </View>
              </ScrollView>
          </View>
        </BottomSheet>
  )
}

export default BookPreviewBottomSheet

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
      backgroundColor: COLORS.WHITE,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
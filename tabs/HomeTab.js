import React from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image} from 'react-native'
import { Searchbar, Card, Text} from 'react-native-paper'
import { COLORS } from '../utils/app_constants'
import { Entypo } from '@expo/vector-icons'
import BookPreviewBottomSheet from '../screens/BookPreviewBottomSheet'
import BookList from '../components/BookList'

const HomeTab = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (event) => {
    setSearchQuery(event)
  }

  const gotoSearchTab = () => {
    navigation.navigate('ExploreTab')
  }

  const [showBookPreview, setShowBookPreview] = React.useState(false)

  const handleToggleBookPreview = () => {
    setShowBookPreview((prevState) => !prevState)
  }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    style={styles.scrollView}
    >
      <BookPreviewBottomSheet showBookPreview={showBookPreview} handleToggleBookPreview={handleToggleBookPreview}/>
      <Text style={styles.headerText}>Home</Text>
      <View style={{paddingHorizontal: 22, paddingVertical: 25}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          inputStyle={{color:'#fff'}}
          defaultValue={searchQuery}
          cursorColor={COLORS.WHITE}
          iconColor={COLORS.WHITE}
          placeholderTextColor={COLORS.WHITE}
          selectionColor={COLORS.WHITE}
          onFocus={gotoSearchTab}
          style={{fontSize: 25, backgroundColor: '#bf0000', color: COLORS.WHITE, height: 65, borderRadius: 15, paddingHorizontal: 20}}
        />
      </View>
      <View>
        <Text  style={styles.newCollectionText}>New Collection</Text>
      </View>
      <ScrollView style={{paddingLeft: 22, height: 'auto', marginBottom: 30}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{display: 'flex', flexDirection:'row', width: '100%', justifyContent: 'space-between', paddingRight: 22}}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
            return <Card key={index} style={{height: 'auto', marginRight: 18, borderRadius: 15}} width={180} onPress={handleToggleBookPreview}>
              <Card.Cover 
                source={{ uri: 'https://picsum.photos/700' }}
                style={{height: 170, borderTopRightRadius: 15, borderTopLeftRadius: 15}}
              />
              <Card.Title 
                title="Card Title"
                subtitle="Card Subtitle"
              />
              </Card>
          })
        }
        </View>
      </ScrollView>

      <ScrollView style={{paddingLeft: 22, height: 'auto', marginBottom: 30}} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{display: 'flex', flexDirection:'row', width: '100%', justifyContent: 'space-between', paddingRight: 22}}>
          {
            ['All','Popular', 'New', 'Old', 'Latest', 'Secret', 'Psychology'].map((data, index) => {
              return (<View 
                key={index}
                style={{
                  height: 'auto',
                  width: 'auto',
                  marginRight: 15, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <Text style={{fontSize: 16,fontWeight: '100', color: COLORS.WHITE, paddingHorizontal: 15}}>{data}</Text>
              </View>)
            })
          }
        </View>
      </ScrollView>

      <View style={{width: '100%', height: 'auto', backgroundColor: COLORS.WHITE, height: 'auto', paddingVertical: 15, borderTopRightRadius: 18,  borderTopLeftRadius: 18, paddingHorizontal: 5}}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
            return (<BookList handleToggleBookPreview={handleToggleBookPreview} index={index} data={data}/>)
          })
        }
      </View>
      
    </ScrollView>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: COLORS.RED
  },
  newCollectionText: {
    color: COLORS.WHITE,
    fontSize: 22,
    padding: 22,
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 30,
    color: COLORS.WHITE,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bolder',
    marginTop: StatusBar.currentHeight
  }
})
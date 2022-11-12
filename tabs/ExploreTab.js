import React from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image} from 'react-native'
import { Searchbar, Card, Text} from 'react-native-paper'
import { COLORS } from '../utils/app_constants'
import { Entypo } from '@expo/vector-icons'
import BookPreviewBottomSheet from '../screens/BookPreviewBottomSheet'
import BookList from '../components/BookList'

const ExploreTab = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (event) => {
    setSearchQuery(event)
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
      <Text style={styles.headerText}>Search</Text>
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
          style={{fontSize: 25, backgroundColor: '#bf0000', color: COLORS.WHITE, height: 65, borderRadius: 15, paddingHorizontal: 20}}
        />
      </View>
      <View style={{width: '100%', height: 'auto', backgroundColor: COLORS.WHITE, height: 'auto', paddingVertical: 15, paddingHorizontal: 5}}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => {
            return (<BookList handleToggleBookPreview={handleToggleBookPreview} index={index} data={data}/>)
          })
        }
      </View>
    </ScrollView>
  )
}

export default ExploreTab

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
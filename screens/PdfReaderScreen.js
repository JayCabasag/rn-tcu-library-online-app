import React from 'react'
import { View, StyleSheet, WebView } from 'react-native';

const PdfReaderScreen = () => {
  const PdfReader = ({ url: uri }) => <WebView javaScriptEnabled={true} style={{ flex: 1 }} source={{ uri }} />
  
  return (
    <SafeAreaView style={{height: '100%'}}>
        <View style={styles.container}>
            <PdfReader url="http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf" />
        </View>
    </SafeAreaView>
  )
}

export default PdfReaderScreen
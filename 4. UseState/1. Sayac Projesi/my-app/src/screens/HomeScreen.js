import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
 
export default function HomeScreen({navigation}) {
   
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslar"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('KursBilgilerim')}
      />
       <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('SayacBilgisi')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

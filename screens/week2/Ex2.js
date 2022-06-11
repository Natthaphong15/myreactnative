import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';

export default function Ex2() {
  const navigation = useNavigation()
  return (
    
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 116 }}></View>
      </View>
      <Button title="Next" onPress={() => { navigation.navigate("Ex3") }} />
    </View>

    
    );


}
import {View, Text} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anasayfama Hoş Geldin!</Text>
      <Text>Murat Menzilci'nin tasarımıdır.</Text>
      <Text style={{alignItems:'center', color:'red'}}> Merhabalar.</Text>
      <Icon name="search1" size={30} color="blue" />
    </View>
  );
}

export default HomeScreen;
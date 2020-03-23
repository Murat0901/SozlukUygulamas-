import {View, Text} from 'react-native';
import * as React from 'react';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anasayfama Hoş Geldin!</Text>
      <Text>Murat Menzilci'nin tasarımıdır.</Text>
    </View>
  );
}

export default HomeScreen;
import { View, Button } from 'react-native';
import * as React from 'react';
import detailView from './detailView';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function historyView({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Detay sayfasına git"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Arama Sayfası" component={historyView} />
      <HomeStack.Screen name="Details" component={detailView} />
    </HomeStack.Navigator>
  );
}

export default SearchStack;

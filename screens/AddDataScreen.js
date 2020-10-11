import React from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CircleButton from 'react-native-circle-button';

export default AddDataScreen = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <CircleButton onPress={() => this.props.navigation.navigate('Home')} />
      </View>
      <View >
        <Text>腕立て</Text>
        <TextInput value="" placeholder="回数" />
      </View>
      <View>
        <Button title="Add Data"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

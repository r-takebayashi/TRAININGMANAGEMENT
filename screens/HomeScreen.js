/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Calendar} from 'react-native-calendars';
import CircleButton from 'react-native-circle-button';

export default HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={{marginTop: 20}}>
        <Calendar />
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <CircleButton />
      </View>
      <View>
        <Button title="Add Data" onPress={() => navigation.navigate('AddData')} />
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

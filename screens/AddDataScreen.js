import React, {Component} from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CircleButton from 'react-native-circle-button';

export default class AddDataScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2}} />
        <View style={{flex: 3, alignItems: 'center', height: 44}}>
          <Text
            style={{
              fontSize: 40,
            }}>
            腕立て
          </Text>
          <TextInput
            style={{
              width: 200,
              height: 60,
              padding: 8,
              backgroundColor: 'white',
              borderColor: 'gray',
              fontSize: 40,
              borderWidth: 2,
              textAlign: 'center',
            }}
            value=""
            placeholder="回数"
          />
        </View>
        <View style={{flex: 2}}>
          <Button title="Add Data" />
        </View>
        <View
          style={{flex: 3, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <CircleButton
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

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

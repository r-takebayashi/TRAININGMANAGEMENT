import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  AsyncStorage,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class AddDataScreen extends Component {
  state = {
    count: '',
  };

  storeData = async (datetime, name) => {
    try {
      await AsyncStorage.setItem(datetime, name);
    } catch (error) {
      console.log(error);
    }
    Alert.alert(name + ': stored');
  };

  buttonClickListner = (e) => {
    this.storeData('20200902', this.state.count);
  };

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
            value={this.state.count}
            onChangeText={(val) => {
              this.setState({count: val});
            }}
            placeholder="回数"
          />
        </View>
        <View style={{flex: 2}}>
          <Button
            onPress={this.buttonClickListner}
            title="Add Data"
            color="#841584"
            style={{
              position: 'absolute',
              right: 16,
              bottom: 16,
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}></View>
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

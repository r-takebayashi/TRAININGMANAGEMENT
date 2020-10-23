/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Calendar} from 'react-native-calendars';
import {FAB} from 'react-native-paper';

const DATES = [];
const today = new Date();

const DATA = [];
const WeekChars = ["日","月","火","水","木","金","土"];

for (let i = 1; i < 30; i++) {
  DATA.push({id: i.toLocaleString(), title: i.toLocaleString() + '日'});
}
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

//export default HomeScreen = ({navigation}) => {
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: new Date(),
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    const renderItem = ({item}) => (
      <View style={styles.cell}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        {/*<Calendar /> */}
        <Text>{this.state.current.toLocaleString()}</Text>
        <Text>{this.state.current.getFullYear()}</Text>
        <FAB
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
          icon="plus"
          onPress={() => navigate('AddData')}
        />
        <SafeAreaView style={styles.container2}>
          <FlatList
            style={styles.flatlist_container}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 32,
  },
  flatlist_container: {
    flex: 1,
    marginTop: 20,
  },
  cell: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#bbb',
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
});

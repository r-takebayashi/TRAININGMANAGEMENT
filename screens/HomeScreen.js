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
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import {FAB} from 'react-native-paper';

const today = new Date();
var dt = new Date();
const lastDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
const lastDateNum = lastDate.getDate();
const DATA = [];
const WeekChars = ['日', '月', '火', '水', '木', '金', '土'];

for (let i = 1; i < lastDateNum; i++) {
  today.setDate(i);
  DATA.push({
    id: i.toLocaleString(),
    calendar_date: today.getDate(i).toLocaleString(),
    weekday: ' (' + WeekChars[today.getDay()] + ')',
    count: i+1,
  });
}

//export default HomeScreen = ({navigation}) => {
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: new Date(),
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    const value = await AsyncStorage.getItem('20200902');
    if (value !== null) {
      this.setState({count: value});
    } else {
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    const renderItem = ({item}) => (
      <View style={styles.cell}>
        <View style={{width: 41, alignItems: 'center'}}>
          <Text style={styles.text}>{item.calendar_date}</Text>
        </View>
        <View style={{width: 55, alignItems: 'center'}}>
          <Text style={styles.text}>{item.weekday}</Text>
        </View>
        <View>
          <Text style={styles.text}>腕立て</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{item.count}</Text>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {/*<Calendar /> */}
        <View>
          <Text style={{fontSize: 20}}>
            {this.state.current.getFullYear()}年{this.state.current.getMonth()}
            月
          </Text>
        </View>
        <FAB
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
          icon="plus"
          onPress={() => navigate('AddData')}
        />
        <Button
          onPress={() => navigate('AddData')}
          title="Add Data"
          color="#841584"
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
        />
        <Button
          onPress={() => this.getData()}
          title="Get Data"
          color="#841584"
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
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

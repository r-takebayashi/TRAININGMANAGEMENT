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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

DATES[0] = today.getFullYear();
DATES[1] = today.getFullYear();
DATES[2] = today.getFullYear();
DATES[3] = today.getFullYear();
DATES[4] = today.getFullYear();
DATES[5] = today.getFullYear();
DATES[6] = today.getFullYear();

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
    const renderItem = ({item}) => <Item title={item.title} />;
    return (
      <View style={styles.container}>
        <Calendar />
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
  container:{
    flex: 1,
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  container2: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});

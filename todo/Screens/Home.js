import {StyleSheet, View, Text, Pressable, FlatList, Alert} from 'react-native';
import React, {Component} from 'react';
import myContext from '../Components/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  static contextType = myContext;

  render() {
    const {data, setData} = this.context;
    // console.log('home.js 16', data[0]);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>Todo List</Text>
          </View>
          <View>
            <Pressable
              onPress={() => this.props.navigation.navigate('TodoForm')}>
              <Icon name="add" size={40} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.list}>
                <Pressable
                  onPress={() => {
                    this.props.navigation.navigate('TodoContent', {
                      id: item.id,
                      name: item.name,
                      content: item.content,
                    });
                  }}>
                  <Text style={styles.taskname}>{item.name}</Text>
                </Pressable>
                <View>
                  <Pressable
                    style={[styles.btn]}
                    onPress={() => {
                      Alert.alert(`${item.name} Deleted`);
                      const d = data.filter(ele => ele.id !== item.id);
                      setData(d);
                    }}>
                    <Icon name="delete" size={40} color="#bf1111" />
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4287f5',
    paddingHorizontal: 10,
  },
  text: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    fontSize: 30,
    color: 'white',
  },
  list: {
    flex: 1,
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#a1a4ab',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  taskname: {
    fontSize: 30,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    flex: 3,
    backgroundColor: '#dadee6',
  },
});

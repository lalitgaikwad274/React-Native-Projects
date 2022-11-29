import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './Components/List';
// import Pagination from 'react-native-pagination';
import Animations from './Components/Animations';

const Paginations = () => {
  const [Data, setData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [Name, setName] = useState('fadeIn');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data);
        const arr = [...response.data.slice(0, 10)];
        setRenderData(arr);
      });
  }, []);

  const renderItem = ({item}) => (
    <List name={item.name} id={item.id} AnimationName={Name} />
  );
  const loadMore = val => {
    if (Data.length > (val + 1) * 10) {
      const arr = [...Data.slice(val * 10, (val + 1) * 10)];
      setRenderData(arr);
      setName(Animations[Math.floor(Math.random() * Animations.length)]);
    }
  };

  const pageData = [];
  const pages = Data.length / 10;
  for (let i = 0; i < pages; i++) {
    pageData.push({id: i, value: i});
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={key => key.id}
        data={renderData}
        renderItem={renderItem}
      />

      <FlatList
        horizontal
        keyExtractor={key => key.id}
        data={pageData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => loadMore(item.value)}>
              <Text style={styles.text}>{item.value}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <Pagination
        // dotThemeLight //<--use with backgroundColor:"grey"
        // listRef={offset} //to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
        paginationVisibleItems={renderData} //needs to track what the user sees
        paginationItems={Data} //pass the same list as data
        paginationItemPadSize={3} //num of items to pad above and below your visable items
      /> */}
    </View>
  );
};

export default Paginations;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  btn: {
    height: 30,
    width: 30,
    backgroundColor: '#842AFB',
    position: 'relative',
    bottom: 0,
    margin: 5,
    borderRadius: 50,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

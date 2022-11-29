import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const TestPagination = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => getData(), []);

  // setTimeout(()=>{getData()},10000)

  const getDataHandler = () => {
    setTimeout(() => {
      getData();
    }, 10000);
  };
  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      console.log('getData');
      setLoading(true);
      // Service to get the data from the server to render
      //   fetch('https://jsonplaceholder.typicode.com/comments')
      //     // Sending the currect offset with get request
      //     .then(response => response.json())
      //     .then(responseJson => {
      //       // Successful response from the API Call
      //       console.log(responseJson);
      //       if (responseJson.results.length > 0) {
      //         setOffset(offset + 1);
      //         // After the response increasing the offset
      //         setDataSource([...dataSource, ...responseJson.results]);
      //         setLoading(false);
      //       } else {
      //         setIsListEnd(true);
      //         setLoading(false);
      //       }
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
          // console.log(response.data);
          //   setData(response.data);
          // const arr = [...response.data.slice(offset * 10, (offset + 1) * 10)];
          // // console.log(arr);
          // setRenderData(arr);
          // setOffset(offset + 1);
          if (response.data.length > (offset + 1) * 10) {
            const arr = [
              ...response.data.slice(offset * 10, (offset + 1) * 10),
            ];
            // console.log(arr);
            setDataSource([...dataSource, ...arr]);
            setOffset(offset + 1);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        });
    }
  };

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator
            color="black"
            style={{marginBottom: 20}}
            size={100}
          />
        ) : null}
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.name}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          margin: 10,
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = item => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getDataHandler}
        onEndReachedThreshold={10}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemStyle: {
    // padding:10,
    height: 50,
  },
});

export default TestPagination;

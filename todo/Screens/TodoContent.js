import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import {TextInput} from 'react-native-paper';
import myContext from '../Components/Context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoContent = ({navigation, route}) => {
  const [isEditable, setIsEditable] = useState(false);
  const {id, name, content} = route.params;
  const [line, setText] = useState(content);
  const {data, setData} = useContext(myContext);

  return (
    <View>
      <View style={styles.header}>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
          {name}
        </Text>
        <Pressable onPress={() => setIsEditable(!isEditable)}>
          <Icon name="edit" size={30} color="white" />
        </Pressable>
      </View>
      <View style={{height: 300, padding: 30}}>
        <TextInput
          style={[
            styles.textinput,
            {
              borderBottomColor: `${isEditable ? 'green' : 'red'}`,
            },
          ]}
          multiline
          numberOfLines={4}
          value={line}
          editable={isEditable}
          onChangeText={text => {
            setText(text);
          }}
        />
        {isEditable ? (
          <Pressable
            onPress={() => {
              setIsEditable(!isEditable);
              const DATA = data.map(item =>
                item.id === id ? {...item, content: line} : item,
              );
              setData(DATA);
              navigation.navigate('TODO APP');
            }}
            style={styles.btn}>
            <Text style={styles.text}>submit</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default TodoContent;

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#114bbf',
    paddingHorizontal: 10,
  },
  textinput: {
    fontSize: 20,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: '#114bbf',
    marginTop: 20,
    borderRadius: 20,
  },
});

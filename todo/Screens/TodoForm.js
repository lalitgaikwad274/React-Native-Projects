import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import myContext from '../Components/Context';
import {TextInput} from 'react-native-paper';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
    };
  }

  static contextType = myContext;

  render() {
    const {data, setData} = this.context;
    console.log(data, ' ', setData);

    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="Task Name"
            onChangeText={text => this.setState({...this.state, name: text})}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Enter Content"
            onChangeText={text =>
              this.setState({...this.setState, content: text})
            }
          />
          <Pressable
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('TODO APP');
              setData([
                ...data,
                {
                  id: Math.floor(Math.random() * 100),
                  name: this.state.name,
                  content: this.state.content,
                },
              ]);
            }}>
            <Text style={styles.text}>ADD</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default TodoForm;
const styles = StyleSheet.create({
  textinput: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: 'white',
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#4287f5',
    padding: 10,
    marginTop: 20,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#dadee6',
    padding: 30,
  },
});

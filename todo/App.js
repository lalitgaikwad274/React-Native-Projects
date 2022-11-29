import React, {Component} from 'react';
import MyStack from './MyStack';
import myContext from './Components/Context';

const Data = [
  {
    id: 1,
    name: 'task1',
    content: 'Hello lalit',
  },
  {
    id: 2,
    name: 'task2',
    content: 'Hello prem',
  },
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
    };
  }

  setData = DATA => {
    this.setState({Data: DATA});
  };

  render() {
    const data = this.state.Data;
    const setData = this.setData;
    return (
      <myContext.Provider value={{data, setData}}>
        <MyStack />
      </myContext.Provider>
    );
  }
}

export default App;

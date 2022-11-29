import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const CustomTextInput = ({placeHolder, onValueChange, value, textStyle}) => {
  const [flag, setFlag] = useState(false);

  const customOnFocus = () => {
    setFlag(true);
  };
  const customOnBlur = () => {
    setFlag(false);
  };

  return (
    <TextInput
      secureTextEntry={textStyle}
      style={[styles.textInput, {borderWidth: flag ? 2 : 0}]}
      placeholder={placeHolder}
      onFocus={customOnFocus}
      onBlur={customOnBlur}
      onChangeText={text => {
        onValueChange(text);
      }}
      value={value}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    borderRadius: 10,
    fontSize: 20,
    padding: 15,
    backgroundColor: '#e1e8f5',
    borderColor: '#407ae6',
  },
});

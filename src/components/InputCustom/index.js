import React from 'react';
import {InputArea, Input} from './styles';
import {Colors} from '../../config/Colors';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill={Colors.text} />
      <Input
        placeholder={placeholder}
        placeholderTextColor={Colors.text}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

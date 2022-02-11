import React from 'react';
import {InputArea, Input} from './styles';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#8a43cc" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#8a43cc"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

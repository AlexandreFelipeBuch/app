import React from 'react';
import {ButtonVoltar, TextButton} from './styles';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <ButtonVoltar onPress={handleMessageButtonClick}>
        <TextButton>Clique aqui</TextButton>
      </ButtonVoltar>
    </Container>
  );
};

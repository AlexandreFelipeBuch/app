import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, ButtonLogout, ButtonText} from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <ButtonLogout onPress={handleLogoutClick}>
        <ButtonText>Logout</ButtonText>
      </ButtonLogout>
    </Container>
  );
};

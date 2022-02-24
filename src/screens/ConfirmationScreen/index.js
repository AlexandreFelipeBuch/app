import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, TitleText, Photo, ButtonArea, ButtonText} from './style';
import ButtonCustom from '../../components/ButtonCustom';
import {Colors} from '../../config/Colors';

export default () => {
  const navigation = useNavigation();

  const handleAnalysisScreenButton = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Photo
        source={require('../../assets/cadastro.png')}
        resizeMode="contain"
      />

      <TitleText>Cadastro concluido com sucesso</TitleText>

      <ButtonCustom
        title="OK"
        bgcolor={Colors.primary}
        color={Colors.white}
        onPress={handleAnalysisScreenButton}
      />
    </Container>
  );
};

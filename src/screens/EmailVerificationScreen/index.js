import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, FieldText, EmailText, FieldArea} from './style';
import InputCustom from '../../components/InputCustom';
import BackIcon from '../../assets/icons/arrow-left.svg';
import Header from '../../components/Header';
import ButtonCustom from '../../components/ButtonCustom';
import {Colors} from '../../config/Colors';
import Logo from '../../assets/tfs.svg';
import EmailIcon from '../../assets/email.svg';

export default () => {
  const navigation = useNavigation();

  const handleSignClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Logo width="70%" height="130" />
      <FieldArea>
        <FieldText>Insira o código enviado para: </FieldText>
        <EmailText>email@gmail.com</EmailText>
        <InputCustom
          IconSvg={EmailIcon}
          placeholder="Digite o código"
          // value={emailField}
          // onChangeText={t => setEmailField(t)}
        />
        <ButtonCustom
          title="Enviar"
          bgcolor={Colors.primary}
          color={Colors.white}
          onPress={handleSignClick}
        />
      </FieldArea>
    </Container>
  );
};

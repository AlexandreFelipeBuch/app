import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, FieldText, FieldArea} from './style';
import Logo from '../../assets/tfs.svg';
import InputCustom from '../../components/InputCustom';
import Header from '../../components/Header';
import BackIcon from '../../assets/icons/arrow-left.svg';
import ButtonCustom from '../../components/ButtonCustom';
import {Colors} from '../../config/Colors';
import EmailIcon from '../../assets/email.svg';

export default () => {
  const navigation = useNavigation();

  const handleEmailVerificationButton = () => {
    navigation.navigate('EmailVerificationScreen');
  };

  return (
    <Container>
      <Logo width="70%" height="130" />
      <FieldArea>
        <FieldText> Insira seu email para envio do código</FieldText>
        <InputCustom
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          // value={emailField}
          // onChangeText={t => setEmailField(t)}
        />

        <ButtonCustom
          title="Enviar"
          bgcolor={Colors.primary}
          color={Colors.white}
          onPress={handleEmailVerificationButton}
        />
      </FieldArea>
    </Container>
  );
};

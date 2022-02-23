import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserContext} from '../../contexts/UserContext';
import ButtonCustom from '../../components/ButtonCustom';
import {Colors} from '../../config/Colors';
import {
  Container,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import InputCustom from '../../components/InputCustom';

import Api from '../../Api';

import Logo from '../../assets/tfs.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  // const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  // const handleSignClick = async () => {
  //   if (nameField != '' && emailField != '' && passwordField != '') {
  //     let res = await Api.signUp(nameField, emailField, passwordField);

  //     if (res.token) {
  //       await AsyncStorage.setItem('token', res.token);

  //       userDispatch({
  //         type: 'setAvatar',
  //         payload: {
  //           avatar: res.data.avatar,
  //         },
  //       });

  //       navigation.reset({
  //         routes: [{name: 'MainTab'}],
  //       });
  //     } else {
  //       alert('Erro: ' + res.error);
  //     }
  //   } else {
  //     alert('Preencha os campos');
  //   }
  // };

  const handleBackButton = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Logo width="100%" height="160" />

      <InputArea>
        <InputCustom
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />

        <InputCustom
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <InputCustom
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />

        <ButtonCustom
          title="Cadastrar"
          bgcolor={Colors.primary}
          color={Colors.white}
          onPress={handleBackButton}
        />
      </InputArea>

      <SignMessageButton onPress={handleBackButton}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

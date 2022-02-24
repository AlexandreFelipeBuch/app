import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import {Colors} from '../../config/Colors';
import ButtonCustom from '../../components/ButtonCustom';

import Api from '../../Api';

import InputCustom from '../../components/InputCustom';
import Logo from '../../assets/tfs.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = () => {
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  };

  // const handleSignClick = async () => {
  //   if (emailField != '' && passwordField != '') {
  //     let json = await Api.signIn(emailField, passwordField);
  //     try {
  //     } catch (error) {}

  //     if (json.token) {
  //       await AsyncStorage.setItem('token', json.token);

  //       userDispatch({
  //         type: 'setAvatar',
  //         payload: {
  //           avatar: json.data.avatar,
  //         },
  //       });

  //       navigation.reset({
  //         routes: [{name: 'MainTab'}],
  //       });
  //     } else {
  //       alert('E-mail e/ou senha errados!');
  //     }
  //   } else {
  //     alert('Preencha os campos!');
  //   }
  // };

  const handleSignUpButton = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const handleNextButton = () => {
    navigation.reset({
      routes: [{name: 'ResetPasswordScreen'}],
    });
  };

  return (
    <Container>
      <Logo width="100%" height="160" fill={Colors.primary} />

      <InputArea>
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
          title="Login"
          bgcolor={Colors.primary}
          color={Colors.white}
          onPress={handleSignClick}
        />
      </InputArea>

      <SignMessageButton onPress={handleSignUpButton}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
      <SignMessageButton onPress={handleNextButton}>
        <SignMessageButtonText>Esqueceu sua senha?</SignMessageButtonText>
        <SignMessageButtonTextBold>Clique aqui</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

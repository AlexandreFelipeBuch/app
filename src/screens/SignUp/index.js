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

import InputCustom from '../../components/InputCustom';

import Api from '../../Api';

import Logo from '../../assets/tfs.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import ButtonCustom from '../../components/ButtonCustom';

export default () => {
  // const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  // const [nameField, setNameField] = useState('');
  // const [emailField, setEmailField] = useState('');
  // const [passwordField, setPasswordField] = useState('');

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
  const handleConfirmButton = () => {
    navigation.reset({
      routes: [{name: 'ConfirmationScreen'}],
    });
  };

  return (
    <Container>
      <Logo width="70%" height="130" />

      <InputArea>
        <InputCustom
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          // value={nameField}
          // onChangeText={t => setNameField(t)}
        />

        <InputCustom
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          // value={emailField}
          // onChangeText={t => setEmailField(t)}
        />

        <InputCustom
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          // value={passwordField}
          // onChangeText={t => setPasswordField(t)}
          password={true}
        />

        <ButtonCustom
          title="Cadastrar"
          bgcolor={Colors.primary}
          color={Colors.white}
          onPress={handleConfirmButton}
        />
      </InputArea>

      <SignMessageButton onPress={handleBackButton}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

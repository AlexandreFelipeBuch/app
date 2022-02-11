import React, {useState} from 'react';
import ModalCustom from '../../components/ModalCustom';
import {useNavigation} from '@react-navigation/native';
import {Container, ButtonModal, ButtonText, ButtonDrawer} from './styles';

export default () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const handleServiceChoose = () => {
    setShowModal(true);
  };
  const handleDrawerOpen = () => {
    navigation.reset({
      routes: [{name: 'MainDrawer'}],
    });
  };
  return (
    <Container>
      <ButtonModal onPress={handleServiceChoose}>
        <ButtonText>Modal Custom</ButtonText>
      </ButtonModal>
      <ModalCustom show={showModal} setShow={setShowModal} />

      <ButtonDrawer onPress={handleDrawerOpen}>
        <ButtonText>Drawer Custom</ButtonText>
      </ButtonDrawer>
    </Container>
  );
};

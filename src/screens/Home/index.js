import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, LogoArea, GuiasArea} from './styles';
import CardsGuia from '../../components/CardGuias';
import Logo from '../../assets/tfs.svg';

export default () => {
  const {navigate} = useNavigation();

  const guias = [
    {
      id: 1,
      icon: 'menu',
      title: 'Drawer',
      namescreen: 'MainDrawer',
    },

    {
      id: 2,
      icon: 'table-of-contents',
      title: 'MainTab',
      namescreen: 'MainTab',
    },

    {
      id: 3,
      icon: 'store',
      title: 'Lojas',
      namescreen: 'Home',
    },

    {id: 4, icon: 'account', title: 'Profile', namescreen: 'Profile'},
  ];
  const handleGo = screenName => {
    navigate(screenName);
  };

  const _renderItem = ({item}) => (
    <CardsGuia
      data={item}
      onPress={dataItem => handleGo(dataItem.namescreen)}
    />
  );

  return (
    <Container>
      <LogoArea>
        <Logo width="80%" height="120" />
      </LogoArea>

      <GuiasArea
        data={guias}
        renderItem={_renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

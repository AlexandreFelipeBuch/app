import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerArea,
  DrawerLogoArea,
  DrawerScroller,
  FooterArea,
  FooterInfo,
  MenuButton,
  MenuSquare,
  MenuButtonText,
  ButtonBack,
  ButtonBackText,
} from './styles';

import Logo from '../../assets/tfs.svg';
import Profile from '../../assets/person.svg';
import Home from '../../assets/home.svg';
import Appointments from '../../assets/today.svg';
import Search from '../../assets/search.svg';
import Favorites from '../../assets/favorite.svg';
import Exit from '../../assets/exit.svg';
import {Colors} from '../../config/Colors';

import Api from '../../Api';

export default props => {
  const navigation = useNavigation();

  const menus = [
    {
      title: 'Home',
      icon: <Home width="25px" height="25px" fill={Colors.primary} />,
      screen: 'Home',
    },
    {
      title: 'Perfil',
      icon: <Profile width="25px" height="25px" fill={Colors.primary} />,
      screen: 'Profile',
    },
    {
      title: 'Agendamentos',
      icon: <Appointments width="25px" height="25px" fill={Colors.primary} />,
      screen: 'Appointments',
    },
    {
      title: 'Busca',
      icon: <Search width="25px" height="25px" fill={Colors.primary} />,
      screen: 'Search',
    },
    {
      title: 'Favoritos',
      icon: <Favorites width="25px" height="25px" fill={Colors.primary} />,
      screen: 'Favorites',
    },
  ];

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <DrawerArea>
      <DrawerLogoArea>
        <Logo width="100" height="90" />
      </DrawerLogoArea>
      <DrawerScroller>
        {menus.map((item, index) => (
          <MenuButton
            key={index}
            onPress={() => navigation.navigate(item.screen)}>
            <MenuSquare></MenuSquare>
            {item.icon}
            <MenuButtonText>{item.title}</MenuButtonText>
          </MenuButton>
        ))}
      </DrawerScroller>

      <FooterArea>
        <FooterInfo>
          <Exit width="25px" height="25px" fill={Colors.primary} />
          <ButtonBack onPress={handleLogoutClick}>
            <MenuSquare></MenuSquare>

            <ButtonBackText>Sair</ButtonBackText>
          </ButtonBack>
        </FooterInfo>
      </FooterArea>
    </DrawerArea>
  );
};

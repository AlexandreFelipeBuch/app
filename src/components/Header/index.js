import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../config/Colors';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  IconArea,
  LogoArea,
  LogoImg,
  HeaderTitle,
  HeaderViewTitle,
  ButtonAddPhoto,
  ButtonPontoInteresseArea,
  ButtonPontoInteresse,
} from './styles';

const Header = ({
  bgColor,
  IconSvg,
  Logo,
  title,
  btnRight,
  pontoInteresse,
  addImg,
  addPonto,
  editPonto,
}) => {
  // console.log('LOGO::',Logo);
  const {goBack} = useNavigation();
  return (
    <Container color={bgColor}>
      {IconSvg && (
        <IconArea onPress={() => goBack()}>
          <IconSvg color={`${Colors.text}`} />
        </IconArea>
      )}
      {Logo && (
        <LogoArea>
          <LogoImg source={{uri: Logo.imagem}} />
        </LogoArea>
      )}
      <HeaderViewTitle>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderViewTitle>

      {btnRight && (
        <ButtonAddPhoto onPress={addImg}>
          {/* <MaterialCommunityIcons name="image-plus" size={25} color="white" /> */}
        </ButtonAddPhoto>
      )}

      {pontoInteresse && (
        <ButtonPontoInteresse onPress={addPonto}>
          {/* <MaterialCommunityIcons
            name="map-marker-plus"
            size={25}
            color="white"
          /> */}
        </ButtonPontoInteresse>
      )}
    </Container>
  );
};

export default Header;

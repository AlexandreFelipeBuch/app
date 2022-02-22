import React from 'react';
import {Colors} from '../../config/Colors';
import {Container, ButtonText, Loading} from './styles';

const ButtonCustom = ({title, onPress, bgcolor, color, loading, primary}) => {
  return (
    <>
      {loading ? (
        <Container onPress={onPress} bgcolor={bgcolor}>
          {primary ? (
            <Loading color={Colors.background} size={16} />
          ) : (
            <Loading color={Colors.primary} size={16} />
          )}
        </Container>
      ) : (
        <Container onPress={onPress} bgcolor={bgcolor}>
          <ButtonText color={color}>{title}</ButtonText>
        </Container>
      )}
    </>
  );
};

export default ButtonCustom;

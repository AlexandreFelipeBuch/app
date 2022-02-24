import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../config/Colors';
import {Container, IconArea, TitleGuia} from './styles';

export default function CardGuias({data, onPress}) {
  const {state} = useContext(UserContext);
  return (
    <Container onPress={() => onPress(data)}>
      <IconArea>
        <MaterialCommunityIcons
          name={data?.icon}
          size={50}
          color={Colors.background}
        />
      </IconArea>
      <TitleGuia>{data?.title}</TitleGuia>
    </Container>
  );
}

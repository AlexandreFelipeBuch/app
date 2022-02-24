import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
`;
export const GuiasArea = styled.FlatList`
  margin-top: 60px;
`;
export const LogoArea = styled.View`
  margin-top: 60px;
  align-items: center;
`;

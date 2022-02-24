import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
export const TabArea = styled.View`
  height: 60px;
  background-color: ${Colors.primary};
  flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
  border-radius: 35px;
  border: 3px solid ${Colors.primary};
  margin-top: -20px;
`;

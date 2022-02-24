import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Colors.background};
  flex-direction: row;
  border: 1px solid ${Colors.primary};
  border-radius: 15px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${Colors.black};
  margin-left: 10px;
`;

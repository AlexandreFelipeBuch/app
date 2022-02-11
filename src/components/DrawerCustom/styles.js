import styled from 'styled-components/native';

export const DrawerArea = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const DrawerLogoArea = styled.View`
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
export const DrawerLogo = styled.Image`
  width: 190px;
  height: 40px;
`;
export const DrawerScroller = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;
export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
`;
export const MenuSquare = styled.View`
  width: 5px;
  height: 35px;
  margin-right: 20px;
  background-color: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const MenuButtonText = styled.Text`
  font-size: 15px;
  margin-left: 20px;
  color: #666e78;
`;
export const Icons = styled.View``;

export const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FooterInfo = styled.View``;

export const FooterUnitText = styled.Text`
  font-size: 15px;
  color: #666e78;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonBackText = styled.Text`
  bottom: 30px;
  left: 15px;
  font-size: 18px;
  color: #666e78;
`;

import React from 'react';
import styled from "styled-components/native";
import AuthButton from '../../components/AuthButton';
import constants from '../../constants';

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Image = styled.Image`
  width: ${constants.width / 2};
  height: ${constants.height / 8};
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View`
  margin-top: 25px;
`;
const LoginLinkText = styled.Text`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
`;

export default ({ navigation: { navigate } }) => {
  return (
    <View>
      <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
      <AuthButton text="Create New Account" onPress={() => navigate("Signup")} />
      <Touchable onPress={() => navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  )
}
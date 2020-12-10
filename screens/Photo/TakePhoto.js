
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import UploadPhoto from "./UploadPhoto";

const View = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

const Text = styled.Text``;

export default ({ navigation: { navigate } }) => (
  <View>
    <TouchableOpacity onPress={() => navigate("UploadPhoto")}>
      <Text>Take Photo</Text>
    </TouchableOpacity>
  </View>
);
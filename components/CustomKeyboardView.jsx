import { View, Text } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native";
const ios = Platform.OS == "ios";
const CustomKeyboardView = ({ children, inChat }) => {
  let kevConfig = {};
  let scrollViewConfig = {};
  if (inChat) {
    kevConfig = { keyboardVerticalOffset: 80 };
    scrollViewConfig = { contentContainerStyle: { flex: 1 } };
  }

  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
      {...kevConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;

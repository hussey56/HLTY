import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const MessageItem = ({ message }) => {
  if (message.userid == 1) {
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{ width: wp(80) }}>
          <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
            <Text>{message?.message}</Text>
          </View>
        </View>
      </View>
    );
  }
  if (message.userid == 2) {
    return (
      <View className="flex-row justify-start mb-3 ml-3">
        <View style={{ width: wp(80) }}>
          <View className="flex self-start p-3 rounded-2xl bg-black-100 border border-black-100">
            <Text style={{ fontSize: hp(1.9), color: "white" }}>
              {message?.message}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default MessageItem;

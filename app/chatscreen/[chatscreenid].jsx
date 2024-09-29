import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ChatHeader from "@/components/ChatHeader";
import MessageList from "@/components/MessageList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import CustomKeyboardView from "@/components/CustomKeyboardView";
const ChatScreen = () => {
  const { chatscreenid } = useLocalSearchParams();
  const textRef = useRef("");
  const inputRef = useRef(null);

  const [messages, setMessages] = useState([
    { userid: 1, message: "hey, how are you??" },
    {
      userid: 2,
      message:
        "I'm fine what about your bro long time no see, where you are!!!!",
    },
    { userid: 1, message: "I'm fine" },
    {
      userid: 2,
      message: "ohGreat",
    },
    {
      userid: 2,
      message: "so where are you living now",
    },
  ]);
  useEffect(() => {
    creatChatRoomIfNotExist();
  }, []);
  const creatChatRoomIfNotExist = async () => {
    // make chat if not create before
  };
  const sendMessagee = async () => {
    textRef.current = "";
    if (inputRef) inputRef?.current?.clear();
    Alert.alert("Success", "Your message sent successfully!");
  };
  return (
    <CustomKeyboardView inChat={true}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <ChatHeader router={router} />
        <View className="h-3 border-b border-neutral-300" />
        <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
          <View className="flex-1">
            <MessageList messages={messages} />
          </View>
          <View className="pt-2 " style={{ marginBottom: hp(2) }}>
            <View className="flex-row mx-3 justify-between bg-white border p-3 border-neutral-300  rounded-full">
              <TextInput
                onChangeText={(value) => (textRef.current = value)}
                placeholder="Type message..."
                ref={inputRef}
                style={{
                  fontSize: hp(2.3),
                }}
                className="flex-1 mr-2"
              />
              <TouchableOpacity
                className="bg-primary-200 p-2 mr-[1px] rounded-full"
                onPress={sendMessagee}
              >
                <Feather color={"#ffffff"} name="send" size={hp(2.7)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default ChatScreen;

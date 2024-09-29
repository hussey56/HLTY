import { ScrollView } from "react-native";
import React from "react";
import MessageItem from "@/components/MessageItem";
const MessageList = ({ messages }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages.map((message, index) => {
        return <MessageItem message={message} key={index} />;
      })}
    </ScrollView>
  );
};

export default MessageList;

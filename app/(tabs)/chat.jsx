import { View, Text, Image, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import { images } from "../../constants";
import NotificationIcon from "../../components/NotifcationIcon";
import MessageTile from "../../components/MessageTile";
import MessagesEmptyState from "../../components/MessagesEmptyState";

const Chat = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      name: "Dentist Rose",
      lastMessage: "Hello How are you",
      time: "Today",
      unread: true,
      image: images.dr1,
    },
    {
      _id: 2,
      name: "Dr. Vince",
      lastMessage: "Bye bye",
      time: "10:02 AM",
      unread: true,
      image: images.dr2,
    },
    {
      _id: 3,
      name: "Roy Derma",
      lastMessage: "yyy ifeinjknj scsdvd dsdf sdvsdvwdv  sfbsdvsdv ",
      time: "12:11 AM",
      unread: false,
      image: images.profileimg,
    },
    {
      _id: 4,
      name: "Surgeon T",
      lastMessage: "dfasd xvsdv",
      time: "Yesterday",
      unread: false,
      image: images.dr3,
    },
  ]);

  const refreshActivity = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <FlatList
        className="mb-12 "
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshActivity} />
        }
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <MessageTile msginfo={item} />}
        ListHeaderComponent={() => (
          <>
            <View className="px-4 space-y-4 ">
              <View className="justify-between items-center flex-row mb-2">
                <View
                  className={
                    "items-center justify-center rounded-[35px] p-1 border-2 border-primary"
                  }
                >
                  <Image
                    source={images.profileimg}
                    resizeMode="contain"
                    className="w-14 h-14 rounded-full"
                  />
                </View>

                <View>
                  <NotificationIcon count={1} />
                </View>
              </View>
            </View>
            <View className="my-1 px-2">
              <Text className="text-start font-pbold text-[32px] px-2 py-1">
                Messages
              </Text>
              <View className="px-1 py-1 mb-2">
                <SearchInput placeholder={"Search your chats here."} />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={
          <MessagesEmptyState
            image={images.emptychat}
            title={"No Conversations"}
            subtitle={"There are no chats in your feed."}
            classname={"mb-32"}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Chat;

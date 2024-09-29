import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { router } from "expo-router";
const appointmentsData = {
  upcoming: [
    { id: "1", dr: "John Alam", date: "2024-07-20", img: images.dr1 },
    { id: "2", dr: "Shis Diego", date: "2024-08-05", img: images.dr2 },
    { id: "134", dr: "John Alam", date: "2024-07-20", img: images.dr1 },
    { id: "24", dr: "Shis Diego", date: "2024-08-05", img: images.dr2 },
    { id: "112", dr: "John Alam", date: "2024-07-20", img: images.dr1 },
    { id: "249", dr: "Shis Diego", date: "2024-08-05", img: images.dr2 },
  ],
  completed: [
    { id: "3", dr: "John Alam", date: "2024-06-15", img: images.dr2 },
    { id: "4", dr: "Ab DFfirm", date: "2024-06-10", img: images.dr1 },
    { id: "134", dr: "John Alam", date: "2024-07-20", img: images.dr1 },
    { id: "24", dr: "Shis Diego", date: "2024-08-05", img: images.dr2 },
  ],
};

const Appointments = () => {
  const [upcoming, setUpComing] = useState(true);
  return (
    <SafeAreaView className="bg-light h-full">
      <View className="px-4 my-3">
        <Text className="text-3xl font-psemibold te">Appointments</Text>
      </View>
    </SafeAreaView>
  );
};

export default Appointments;

import {
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ActivityCard from "@/components/ActivityCard";
import HomeEmptyState from "@/components/HomeEmptyState";

const Activitys = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activitys, setActivitys] = useState([]);

  const refreshActivity = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity onPress={() => router.back()} className="p-5">
        <Image
          source={icons.leftArrow}
          resizeMode="contain"
          className="w-6 h-6"
          tintColor={"#000000"}
        />
      </TouchableOpacity>
      <FlatList
        data={activitys}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshActivity} />
        }
        ListEmptyComponent={() => (
          <HomeEmptyState
            title={"No Activity Found"}
            subtitle={
              "Start Booking your Appointments, Medical tests, Medicines using HLTY."
            }
            button={true}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="dark" backgroundColor="#000000" />
    </SafeAreaView>
  );
};

export default Activitys;

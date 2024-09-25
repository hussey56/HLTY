import { View, Text, FlatList, RefreshControl, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Services from "../../components/Services";
import SectionHeading from "../../components/SectionHeading";
import NotificationIcon from "../../components/NotifcationIcon";
import ActivityCard from "../../components/ActivityCard";
import HomeEmptyState from "../../components/HomeEmptyState";
import { router } from "expo-router";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activitys, setActivitys] = useState([
    { _id: 1, name: "Appointment" },
    { _id: 11, name: "Ambulance" },
    { _id: 2, name: "Reports" },
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
        className="mb-12"
        data={activitys}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        ListHeaderComponent={() => (
          <>
            <View className="my-1 px-4 space-y-4 ">
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
            <View className="px-[7px] mb-[0.5px] rounded-3xl py-1">
              <View className="bg-[#000303dc] border-neutral-200 border-[1px] rounded-[25px] px-[15px] py-1">
                <View className="my-3">
                  <Text
                    className="text-3xl font-pbold text-start text-general-500  "
                    numberOfLines={1}
                  >
                    Find the Best
                  </Text>
                  <Text
                    className="text-3xl font-pbold text-start  text-[#29dde0dc]"
                    numberOfLines={1}
                  >
                    Doctors <Text className="text-general-300">&</Text> Surgeons
                  </Text>
                </View>
                <View className="mb-3">
                  <SearchInput placeholder={"Search for Doctors, Surgeons."} />
                </View>
              </View>
            </View>

            <View className="my-4 px-4 space-y-5 ">
              <View className="mb-2">
                <SectionHeading
                  heading={"How can we assist you?"}
                  subheading={"Need Help"}
                  onPress={() => {}}
                  classname={"mb-4"}
                />
                <Services />
              </View>
              <View className="mt-1">
                <SectionHeading
                  heading={"Recent Activity"}
                  subheading={"View all"}
                  onPress={() => router.push("/(pages)/activitys")}
                />
              </View>
            </View>
          </>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshActivity} />
        }
        ListEmptyComponent={() => (
          <HomeEmptyState
            title={"No Recent Activity Found"}
            subtitle={
              "Start Booking your Appointments, Medical tests, Medicines using HLTY."
            }
            classname={"mb-32"}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

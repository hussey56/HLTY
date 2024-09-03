import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Colors } from "../../constants/Colors";
import SearchInput from "../../components/SearchInput";
import Services from "../../components/Services";
import SectionHeading from "../../components/SectionHeading";
import HomeCategories from "../../components/HomeCategories";
import NotificationIcon from "../../components/NotifcationIcon";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="my-4 px-4 space-y-5 ">
          <View className="justify-between items-center flex-row mb-3">
            <View className={"items-center justify-center"}>
              <Image
                source={images.profileimg}
                resizeMode="contain"
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 30,
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  objectFit: "contain",
                }}
              />
            </View>

            <View>
              <NotificationIcon count={9} />
            </View>
          </View>
          <View className="px-[3.5]">
            <Text
              className="text-[34px] font-pblack text-start text-primary-300"
              numberOfLines={1}
            >
              Find the Best
            </Text>
            <Text
              className="text-[32px] font-pmedium text-start"
              numberOfLines={1}
            >
              Doctors & Surgeons
            </Text>
          </View>
          <View className="mb-3">
            <SearchInput placeholder={"Search Doctors, Surgeons here ..."} />
          </View>
          <View className="mb-2">
            <SectionHeading
              heading={"How can we assist you?"}
              subheading={"Need Help"}
              onPress={() => {}}
            />
            <Services />
          </View>
          <View className="my-2">
            <SectionHeading
              heading={"Popular Categories"}
              subheading={"See more"}
              onPress={() => {}}
            />
            <HomeCategories />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

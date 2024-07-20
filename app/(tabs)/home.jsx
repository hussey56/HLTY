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
import { icons, images } from "../../constants";
import { Colors } from "../../constants/Colors";
import SearchInput from "../../components/SearchInput";
import Services from "../../components/Services";
import SectionHeading from "../../components/SectionHeading";
import HomeCategories from "../../components/HomeCategories";
import NotificationIcon from "../../components/NotifcationIcon";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView className="bg-light h-full">
      <ScrollView>
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
              <NotificationIcon count={5}/>
            </View>
          </View>
          <View className="px-[3.5]">
            <Text className="text-3xl font-psemibold text-start">
              Appointment with a consultant doctor
            </Text>
          </View>
          <View className="mb-3">
            <SearchInput placeholder={"Want to search anything.."} />
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
            <HomeCategories/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

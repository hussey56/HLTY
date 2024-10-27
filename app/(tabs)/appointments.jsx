import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ActivityCard from "../../components/ActivityCard";

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

const FirstRoute = () => (
  <SafeAreaView className="flex-1 bg-general-500 mb-28">
    <FlatList
      showsVerticalScrollIndicator={false}
      data={appointmentsData.upcoming}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ActivityCard activity={item} showButton={false} />
      )}
    />
  </SafeAreaView>
);

const SecondRoute = () => (
  <SafeAreaView className="flex-1 bg-general-500 mb-28">
    <FlatList
      showsVerticalScrollIndicator={false}
      data={appointmentsData.completed}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ActivityCard activity={item} showButton={false} />
      )}
    />
  </SafeAreaView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Appointments = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Upcoming" },
    { key: "second", title: "Completed" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor="#000000"
      inactiveColor="#00006ef"
      indicatorStyle={{
        backgroundColor: "#4ec7e1",
      }}
      style={{ backgroundColor: "#F6F8FA" }}
    />
  );
  return (
    <SafeAreaView className="bg-general-500 h-full">
      <View className="px-4 my-2">
        <Text className="text-3xl font-psemibold ">Appointments</Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default Appointments;

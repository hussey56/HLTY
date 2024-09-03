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

const AppointmentCard = ({ appointment }) => (
  <View className="bg-white px-2 py-[7px] my-2 mx-3 rounded-2xl shadow-sm">
    <View className="flex-row gap-2 ">
      <View className="rounded-md  px-1 py-1">
        <Image
          resizeMode="contain"
          source={appointment.img}
          className="h-25 w-20  rounded-xl"
        />
      </View>
      <View className="justify-center flex-1 ">
        <Text className="font-pmedium text-base font-lg">
          Dr {appointment.dr}
        </Text>
        <Text className="font-plight">Cardiologist</Text>
        <Text>⭐⭐⭐⭐⭐ (4.5)</Text>
        <Text className="font-medium font-sm  mt-2">
          📅 23 Jan 2024, 11:00 AM
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/home")}
        className="px-3 py-2"
      >
        <Text className="text-primary font-pregular font-2xl">View</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const UpcomingAppointments = () => (
  <FlatList
    data={appointmentsData.upcoming}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <AppointmentCard appointment={item} />}
  />
);

const CompletedAppointments = () => (
  <FlatList
    data={appointmentsData.completed}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <AppointmentCard appointment={item} />}
  />
);
const Appointments = () => {
  const [upcoming, setUpComing] = useState(true);
  return (
    <SafeAreaView className="bg-light h-full">
      <View className="px-4 my-3">
        <Text className="text-3xl font-psemibold te">Appointments</Text>
      </View>
      <View className="flex-row item-center gap-3 justify-center mb-3">
        <TouchableOpacity
          onPress={() => setUpComing(true)}
          className={`h-12 px-3  items-center justify-center rounded-xl ${
            upcoming ? "bg-primary" : "bg-light "
          }`}
        >
          <Text
            className={`text-lg font-medium ${
              upcoming ? "text-white" : "text-primary"
            } `}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`h-12 px-3  items-center justify-center rounded-xl ${
            !upcoming ? "bg-primary" : "bg-light "
          }`}
          onPress={() => setUpComing(false)}
        >
          <Text
            className={`text-lg font-medium ${
              !upcoming ? "text-white" : "text-primary"
            } `}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {upcoming ? <UpcomingAppointments /> : <CompletedAppointments />}
    </SafeAreaView>
  );
};

export default Appointments;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import CustomButton from "./CustomButton";
import { ReactNativeModal } from "react-native-modal";
import OutlineButton from "./OutlineButton";

const ActivityCard = ({
  activity,
  showButton = true,
}: {
  activity: any;
  showButton: Boolean;
}) => {
  const onDelete = () => {
    setVerification({ ...verification, state: "pending" });
  };
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
    loading: false,
  });
  return (
    <View className="mb-2 px-1 bg-white border-[1px] border-neutral-200 rounded-xl mx-2 shadow-sm ">
      <View className="p-2  w-full  flex-row  mt-1">
        <View className="bg-success-300 rounded-lg items-start justify-start p-2">
          <Image
            source={icons.hospital}
            className="h-10 w-10 "
            resizeMode="contain"
          />
        </View>

        <View className="flex px-2  justify-start items-start mx-[0.75px]">
          <Text
            className={`font-psemibold text-neutral-700 text-xl my-[2px]`}
            numberOfLines={1}
          >
            {activity.name || "Dr Imtiaz"}
          </Text>
          <Text
            className="font-pregular text-general-200 text-sm"
            numberOfLines={1}
          >
            <Image
              className="w-4 h-4"
              source={icons.calender}
              resizeMode="contain"
            />{" "}
            09,Sep 2024 11:00 AM
          </Text>
        </View>
        {showButton && (
          <TouchableOpacity
            onPress={onDelete}
            className="flex-1 justify-start items-end py-2 px-1"
          >
            <Image
              source={icons.deleteicon}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </TouchableOpacity>
        )}
        {!showButton && (
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/chat")}
            className="flex-1 justify-start items-end py-1 px-1"
          >
            <Text className="text-primary-500 text-md font-semibold">View</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="w-full px-1 py-1 space-y-1 flex-row gap-x-2">
        <View className="flex-row justify-start items-end gap-x-1">
          <Image
            className="w-5 h-5"
            source={icons.patient}
            resizeMode="contain"
            tintColor={"grey"}
          />
          <Text
            className="font-pbold text-neutral-500 text-md w-max-40 overflow-hidden"
            numberOfLines={1}
          >
            Hassan Khan
          </Text>
        </View>
        <View className="flex-row justify-start items-start gap-x-2">
          <Image
            className="w-5 h-5"
            tintColor={"green"}
            source={icons.bill}
            resizeMode="contain"
          />
          <Text
            className="font-pmedium text-neutral-800 text-md"
            numberOfLines={1}
          >
            $500 <Text className="text-neutral-500 font-pregular">Paid</Text>
          </Text>
        </View>
      </View>
      {!showButton && <View className="my-1" />}
      {showButton && (
        <View className="w-full p-2">
          <View className="flex-row justify-start items-center gap-x-2">
            <Image
              className="w-5 h-5"
              tintColor={"black"}
              source={icons.id}
              resizeMode="contain"
            />
            <Text
              className="font-pregular text-neutral-500 text-sm"
              numberOfLines={1}
            >
              G342352352355
            </Text>
          </View>
        </View>
      )}

      {showButton && (
        <View className="w-full p-2">
          <CustomButton
            title="View"
            onPress={() => router.push("/(tabs)/chat")}
            className="shadow-none rounded-xl bg-primary-500 mb-1"
          />
        </View>
      )}

      <ReactNativeModal isVisible={verification.state === "pending"}>
        <View className="bg-white px-5 py-5 rounded-2xl min-h-[200px]">
          {verification.loading ? (
            <View className="d-flex items-center justify-center m-auto">
              <ActivityIndicator />
              <Text className="text-danger-600 text-xl  mt-2 font-pmedium">
                Deleting {activity.name} ...
              </Text>
            </View>
          ) : (
            <>
              <Text className="text-2xl font-pbold text-center">
                Delete Action
              </Text>

              <Text className="text-lg font-plight text-center">
                Are you really want to delete this {activity.name}?
              </Text>

              {verification.error && (
                <Text className="text-red-500 text-sm mt-1">
                  {verification.error}
                </Text>
              )}
              <CustomButton
                title="Delete"
                className="mt-5 shadow-none"
                bgVariant="danger"
                onPress={() => {
                  setVerification({ ...verification, loading: true });
                  setTimeout(() => {
                    setVerification({
                      ...verification,
                      state: "default",
                      loading: false,
                    });
                  }, 3000);
                }}
              />
              <OutlineButton
                title="Cancel"
                textVariant="last"
                onPress={() => {
                  setVerification({ ...verification, state: "default" });
                }}
                className="mt-2"
              />
            </>
          )}
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default ActivityCard;

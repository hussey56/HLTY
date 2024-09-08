import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import { router } from "expo-router";
import InputField from "@/components/TextInput";
import CustomButton from "@/components/CustomButton";
import { ReactNativeModal } from "react-native-modal";
const ForgetPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const regexemail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const onFindAccount = () => {
    if (form.email === "" || !form.email.toLowerCase().match(regexemail)) {
      Alert.alert("Error", "Please Enter a valid email!");
    } else {
      setVerification({ ...verification, state: "pending" });
    }
  };
  const onPressVerify = () => {
    setVerification({
      state: "default",
      error: "",
      code: "",
    });
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
      <View className="px-5 py-2">
        <Text className="text-black text-3xl font-pbold">Forget Password</Text>
        <Text className="text-md font-pregular text-general-200 py-1">
          Provide your account's email for which you want to reset password.
        </Text>
        <InputField
          label="Account Email"
          labelStyle="mt-2"
          placeholder="Enter your Email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <CustomButton
          title="Find Account"
          onPress={onFindAccount}
          className="mt-2"
        />
      </View>
      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => {
          if (verification.state === "success") setShowSuccessModal(true);
        }}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text className="text-3xl font-pextrabold mb-2">Verification</Text>
          <Text>
            We've sent a verification code to{" "}
            <Text className="text-general-200 ">{form.email}</Text>
          </Text>
          <InputField
            label="Code"
            icon={icons.lock}
            placeholder="12345"
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) => setVerification({ ...verification, code })}
          />
          {verification.error && (
            <Text className="text-red-500 text-sm mt-1">
              {verification.error}
            </Text>
          )}
          <CustomButton
            title="Verify Account"
            onPress={onPressVerify}
            className="mt-5"
            bgVariant="success"
          />
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default ForgetPassword;

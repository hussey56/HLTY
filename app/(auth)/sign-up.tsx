import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/TextInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import ReactNativeModal from "react-native-modal";
import { Colors } from "@/constants/Colors";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showpassword, setShowPassword] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  const regexemail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onPressVerify = async () => {
    setVerification({ ...verification, state: "success" });
  };
  const onSignInPress = () => {
    if (form.email === "" || !form.email.toLowerCase().match(regexemail)) {
      Alert.alert("Error", "Please Enter a valid email!");
      return;
    }
    setVerification({ ...verification, state: "pending" });
  };
  const togglePassword = () => {
    setShowPassword(!showpassword);
  };
  return (
    <ScrollView
      className="flex-1  bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1  bg-white">
        <View className="p-5 flex items-center justify-center mt-2">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-32 h-32"
          />
        </View>
        <View className="flex items-center justify-between ">
          <Text className="text-primary-300 font-pbold text-[42px]">HLTY</Text>
          <Text className="text-black font-psemibold text-2xl">
            Account Register
          </Text>
        </View>
        <View className="p-5">
          <InputField
            placeholder="Enter a Username"
            label={"Username"}
            icon={icons.person}
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
          />
          <InputField
            placeholder="Enter your Email"
            label={"Email"}
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            placeholder="Enter your Password"
            label={"Password"}
            icon={icons.lock}
            secureTextEntry={true}
            showpassword={showpassword}
            togglePassword={togglePassword}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign up"
            onPress={onSignInPress}
            className="mt-6 shadow-none"
          />
          <OAuth />
          <Link
            href={"/sign-in"}
            className="text-lg text-center text-general-100 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-300">Login</Text>
          </Link>
          <ReactNativeModal
            isVisible={verification.state === "pending"}
            onModalHide={() => {
              if (verification.state === "success") setShowSuccessModal(true);
            }}
          >
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
              <Text className="text-3xl font-JakartaExtraBold mb-2">
                Verification
              </Text>
              <Text>We've sent a verification code to {form.email}</Text>
              <InputField
                label="Code"
                icon={icons.lock}
                placeholder="12345"
                value={verification.code}
                keyboardType="numeric"
                onChangeText={(code) =>
                  setVerification({ ...verification, code })
                }
              />
              {verification.error && (
                <Text className="text-red-500 text-sm mt-1">
                  {verification.error}
                </Text>
              )}
              <CustomButton
                title="Verify Email"
                onPress={onPressVerify}
                className="mt-5 bg-success-500"
              />
            </View>
          </ReactNativeModal>
          {/* Varification Model */}
          <ReactNativeModal isVisible={showSuccessModal}>
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
              <Image
                source={images.check}
                className="w-[110px] h-[110px] mx-auto my-5"
              />
              <Text className="text-3xl font-JakartaBold text-center">
                Verified
              </Text>
              <Text className="text-base text-center mt-2 text-gray-400 font-Jakarta">
                You have successfully verified your account.
              </Text>

              <CustomButton
                title="Browse Home"
                onPress={() => {
                  setShowSuccessModal(false);
                  router.push("/(tabs)/home");
                }}
                className="mt-5 shadow-none"
                bgVariant="primary"
              />
            </View>
          </ReactNativeModal>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/TextInput";
import CustomButton from "@/components/CustomButton";
import { Link, router, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showpassword, setShowPassword] = useState(true);
  const onSignInPress = () => {
    router.replace("/(tabs)/home");
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
            Account Login
          </Text>
        </View>
        <View className="p-5">
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
          <TouchableOpacity
            onPress={() => router.push("/forget-password")}
            className="items-end flex mx-1"
          >
            <Text className="font-pregular text-primary-300">
              Forget Password?
            </Text>
          </TouchableOpacity>
          <CustomButton
            title="Sign in"
            onPress={onSignInPress}
            className="mt-6 shadow-none"
          />
          <OAuth />
          <Link
            href={"/sign-up"}
            className="text-lg text-center text-general-100 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-300">Register</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

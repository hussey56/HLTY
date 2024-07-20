import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from "../constants";
import { router } from 'expo-router';

const HomeCategories = () => {
  
    const services = [
        {
          id: 1,
          name: "Cardiologist",
          route: "/faq",
          image: icons.heart,
        },
        {
          id: 2,
          name: "Pulmonologist",
          route: "/",
          image: icons.lungs,
        },
        {
          id: 3,
          name: "Hepatologist",
          route: "/",
          image: icons.liver,
        },
        {
          id: 4,
          name: "Nephrologist",
          route: "/",
          image: icons.kidney,
        }
      ];
  return (
    <View className="flex-wrap flex-row items-center justify-evenly gap-2  relative">
      {services.map((service)=>(
        <TouchableOpacity onPress={()=>router.push(service.route)} key={service.id} className={`space-y-3 w-5/12 h-40 px-1 py-2 border-2 bg-white border-white  ${service.id == 1 || service.id == 4 ?'shadow-lg':'shadow-md'}   rounded-3xl my-1 items-center justify-center`}>
      
      <Image
        resizeMode="contain"
        source={service.image}
        className="w-20 h-20"
      />
       <Text className={`text-rg font-psemibold`}>
       {service.name}
        </Text> 
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default HomeCategories
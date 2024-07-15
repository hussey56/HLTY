import { View, Text,Image } from 'react-native'
import React from 'react'
import { icons } from "../constants";

const HomeCategories = () => {
    const services = [
        {
          id: 1,
          name: "Cardiologist",
          route: "/",
          image: icons.heart,
        },
        {
          id: 3,
          name: "Pulmonologist",
          route: "/",
          image: icons.lungs,
        },
        // {
        //   id: 3,
        //   name: "Hepatologist",
        //   route: "/",
        //   image: icons.liver,
        // },
        // {
        //   id: 4,
        //   name: "Nephrologist",
        //   route: "/",
        //   image: icons.kidney,
        // },
      ];
  return (
    <View className="flex-wrap flex-row items-center justify-evenly gap-2  relative">
      {services.map((service)=>(
        <View key={service.id} className={`space-y-2 w-5/12 h-40 px-1 py-2 border-2 ${service.id == 2? 'border-primary/100':'bg-white border-white  shadow'}    rounded-3xl my-1 items-center justify-center`}>
      
      <Image
        resizeMode="contain"
        source={service.image}
        className="w-20 h-20"
      />
       <Text className={`text-rg font-psemibold`}>
       {service.name}
        </Text> 
        </View>
      ))}
    </View>
  )
}

export default HomeCategories
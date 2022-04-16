import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <View>
      <View style={tw`flex flex-col p-4`}>
        <View style={tw`  h-[200px] shadow-lg`}>
          <View style={tw`flex-1 justify-center`}>
            <ImageBackground
              style={tw`flex-1 justify-center rounded-lg `}
              // source={{ uri:  }}
              imageStyle={{ borderRadius: 10 }}
              source={require("./img/sessions.jpg")}
              resizeMode="cover"
            >
              <Text style={tw`m-2 text-white text-lg text-center`}>
                Sessions
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View style={tw` mt-4 h-[200px] rounded-xl shadow-lg`}>
          <ImageBackground
            style={tw`flex-1 justify-center rounded-lg `}
            // source={{ uri:  }}
            imageStyle={{ borderRadius: 10 }}
            source={require("./img/sessions.jpg")}
            resizeMode="cover"
          >
            <Text style={tw`m-2 text-white text-lg text-center`}>
              Workout Log
            </Text>
          </ImageBackground>
        </View>
        <View style={tw` mt-4 h-[200px]  rounded-xl shadow-lg`}>
          <ImageBackground
            style={tw`flex-1 justify-center rounded-lg `}
            // source={{ uri:  }}
            source={require("./img/sessions.jpg")}
            resizeMode="cover"
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={tw`m-2 text-white text-lg text-center`}>
              Personal Records
            </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

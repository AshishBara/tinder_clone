
import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView, View, Text, Button, TouchableOpacity, Image } from 'react-native'
import useAuth from '../hooks/useAuth';
import tw from "tailwind-rn";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";


const DUMMY_DATA = [
    {
        firstName: "Ashish",
        lastName: "Bara",
        occupation: "software Developer",
        photoURL: "https://scontent.fpat3-3.fna.fbcdn.net/v/t31.18172-8/21994155_1545034362259028_8236757356347532663_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=W9TN_nIQR_0AX_zIkjT&tn=ZjDo5vee4REScIiz&_nc_ht=scontent.fpat3-3.fna&oh=5f29fcecb540c9afb7938c92d2c1141c&oe=61C5FF90",
        age: 25,
        id: 123,
    },
    {
        firstName: "Elon",
        lastName: "Musk",
        occupation: "software Developer",
        photoURL: "https://wallpapercave.com/wp/wp2048440.jpg",
        age: 40,
        id: 456,
    },
    {
        firstName: "Sunny",
        lastName: "Sangha",
        occupation: "software Developer",
        photoURL: "https://wallpapercave.com/wp/wp2048440.jpg",
        age: 21,
        id: 789,
    }
]

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })

    }, [])

    return (
        <View style={tw("flex-1 mt-7")}>
            <View style={tw("flex-row items-center justify-between px-5")}>
                <TouchableOpacity onPress={logout}>
                    <Image style={tw("h-10 w-10 rounded-full")} source={{ uri: user.photoURL }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={tw("h-16 w-14")} source={require("../logo.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
                    <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
                </TouchableOpacity>
            </View>
            {/* end of the header */}

            {/* Cards */}
            <View style={tw("flex-1 -mt-6")}>
                <Swiper
                    containerStyle={{ backgroundColor: "transparent"}}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    verticalSwipe={false}
                    animateCardOpacity
                    renderCard={card => (
                        <View key={card.id} style={tw("relative bg-white h-3/4 rounded-xl")}>
                        <Image style={tw("absolute top-0 h-full w-full rounded-xl")} source={{ uri: card.photoURL }} />
                        <View>
                            <View >
                                <Text>
                                    {card.firstName} {card.lastName}
                                </Text>
                                <Text>
                                    {card.occupation}
                                </Text>
                            </View>
                            <Text>{card.age}</Text>
                        </View>
                    </View>
                    )
                       
                    }
                />
            </View>



        </View>
    )
}

export default HomeScreen

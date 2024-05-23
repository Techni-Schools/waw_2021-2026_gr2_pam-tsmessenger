import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SplashScreenProps } from "./types";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFocusEffect from "../../hooks/useFocusEffects";

const SplashScreen: React.FC<SplashScreenProps> = (props) => {
const { navigation } = props;
const { navigate } = navigation;

useFocusEffect(() => {
    AsyncStorage.getItem("auth-token").then((token) => {
        if (token) navigate("Conversations");
        else navigate("Login");
    });
}, []);


return <View style={[styles.container]}>
    <ActivityIndicator size={80}></ActivityIndicator>
</View>;
}

export default SplashScreen;
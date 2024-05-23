import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import styles from "./styles";
import { LoginScreenProps } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: (variables: { email: string; password: string }) =>
      api.auth.login(variables),
    onSuccess: async ({ token }) => {
      await AsyncStorage.setItem("auth-token", token);
      navigate("Splash");
    },
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        keyboardVerticalOffset={10}
        style={{ flexDirection: "column", justifyContent: "center" }}
      >
        <ScrollView style={{ padding: 25 }}>
          <View style={{ gap: 8 }}>
            <TextInput
              label={"Email"}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              label={"Password"}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              secureTextEntry={true}
            ></TextInput>
            <Button
              mode="contained"
              disabled={isPending}
              onPress={() => {
                login({ email, password });
              }}
            >
              Login
            </Button>
            <HelperText type="error" visible={error !== undefined}>
              {error?.message}
            </HelperText>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

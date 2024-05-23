import React, { useState } from "react";
import { View, Alert } from "react-native";
import styles from "./styles";
import { ConversationsMenuProps } from "./types";
import { Button, Menu as PaperMenu } from "react-native-paper";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ConversationsMenu: React.FC<ConversationsMenuProps> = (props) => {
  const {} = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { navigate } = useNavigation();

  const { mutate: logout } = useMutation({
    mutationFn: () => AsyncStorage.removeItem("auth-token"),
    onSuccess: () => navigate("Splash"),
  });

  return (
    <View style={[styles.container]}>
      <PaperMenu
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        anchor={
          <Button icon={"dots-vertical"} onPress={() => setIsVisible(true)}>
            {""}
          </Button>
        }
      >
        <PaperMenu.Item
          title="New conversation"
          onPress={() => {
            Alert.prompt("New conversation", "Enter name of conversation...", [
              { text: "Cancel", style: "cancel" },
              { text: "Create", onPress: (name) => {} },
            ]);
          }}
        ></PaperMenu.Item>
        <PaperMenu.Item
          title="Profile"
          onPress={() => navigate("Profile")}
        ></PaperMenu.Item>
        <PaperMenu.Item
          title="Log out"
          onPress={() => logout()}
        ></PaperMenu.Item>
      </PaperMenu>
    </View>
  );
};

export default ConversationsMenu;

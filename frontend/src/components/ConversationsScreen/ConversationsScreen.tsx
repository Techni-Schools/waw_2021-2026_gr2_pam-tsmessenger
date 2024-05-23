import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import { ConversationsScreenProps } from "./types";
import Header from "../Header";
import ConversationsMenu from "../ConversationsMenu";

const ConversationsScreen: React.FC<ConversationsScreenProps> = (props) => {
  const {} = props;

  return (
    <SafeAreaView style={[styles.container]}>
      <Header headline="Conversations">
        <ConversationsMenu />
      </Header>
    </SafeAreaView>
  );
};

export default ConversationsScreen;

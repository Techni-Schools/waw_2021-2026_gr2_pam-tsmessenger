import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import { MessageListProps } from "./types";
import MessageListItem from "../MessageListItem";

const MessageList: React.FC<MessageListProps> = (props) => {
  const { messages } = props;

  return (
    <ScrollView style={[styles.container]}>
      <View style={{ gap: 15 }}>
        {messages?.map((message) => (
          <MessageListItem message={message} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MessageList;

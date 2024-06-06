import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import styles from "./styles";
import { ConversationScreenProps } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageInputBar from "../MessageInputBar";
import Header from "../Header";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api";
import MessageList from "../MessageList";

const ConversationScreen: React.FC<ConversationScreenProps> = (props) => {
  const { route } = props;
  const { params } = route;
  const { conversationId } = params;

  const {
    data: conversation,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["api.conversations.retrieve", conversationId],
    queryFn: () => api.conversations.retrieve(conversationId),
  });

  const { data: messages, refetch } = useQuery({
    queryKey: ["api.conversations.messages.list", conversationId],
    queryFn: () =>
      api.conversations.messages.list(conversationId, { populate: "user" }),
  });

  const { mutate: createMessage } = useMutation({
    mutationKey: ["api.conversations.message.create", conversationId],
    mutationFn: (variables: { content: string }) =>
      api.conversations.messages.create(conversationId, variables),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAvoidingView
        style={{
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          gap: 25,
        }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={10}
      >
        <Header headline="Conversation"></Header>
        <View style={{ flex: 1 }}>
          <MessageList messages={messages} />
        </View>
        <MessageInputBar onSubmit={(content) => createMessage({ content })} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConversationScreen;

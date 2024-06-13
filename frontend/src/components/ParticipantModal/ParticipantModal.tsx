import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import { ParticipantModalProps } from "./types";
import { Button, Headline, Modal, Portal, useTheme } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParamList } from "../../../App";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api";
import { Participant } from "../../types";
import UserRow from "../UserRow";

const ParticipantModal: React.FC<ParticipantModalProps> = (props) => {
  const { visible, onClose } = props;
  const { colors } = useTheme();
  const { params } = useRoute<RouteProp<ParamList, "Conversation">>();
  const { conversationId } = params;

  const { data: users } = useQuery({
    queryKey: ["api.users.list"],
    queryFn: () => api.users.list(),
  });

  const { data: participants, refetch } = useQuery({
    queryKey: ["api.conversations.participants.list", conversationId],
    queryFn: () =>
      api.conversations.participants.list(conversationId, {
        populate: "participants.user",
      }),
  });

  const { data: currentUser } = useQuery({
    queryKey: ["api.users.me.retrieve"],
    queryFn: () => api.users.me.retrieve(),
  });

  const { mutate: createParticipant } = useMutation({
    mutationKey: ["api.conversations.participants.create", conversationId],
    mutationFn: (data: Pick<Participant, "role" | "user">) =>
      api.conversations.participants.create(conversationId, data),
    onSuccess: () => refetch(),
  });

  const { mutate: deleteParticipant } = useMutation({
    mutationKey: ["api.conversations.participants.delete", conversationId],
    mutationFn: (data: Participant["_id"]) =>
      api.conversations.participants.delete(conversationId, data),
    onSuccess: () => refetch(),
  });

  return (
    <Portal>
      <Modal style={{ padding: 20 }} visible={visible}>
        <View
          style={{
            backgroundColor: "#111",
            borderRadius: 20,
            padding: 20,
            maxHeight: 500,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Button icon="close" onPress={() => onClose()}>
              {""}
            </Button>
          </View>
          <ScrollView>
            <View>
              <Headline>Participants</Headline>
              {participants?.map(({ _id, user }) => (
                <UserRow
                  key={_id}
                  user={user}
                  buttonElement={
                    <Button onPress={() => deleteParticipant(_id)}>Kick</Button>
                  }
                />
              ))}
            </View>
            <View>
              <Headline>Other users</Headline>
              {users?.map((user) => (
                <UserRow
                  key={user._id}
                  user={user}
                  buttonElement={
                    <Button
                      onPress={() =>
                        createParticipant({ user: user._id, role: "member" })
                      }
                    >
                      Add
                    </Button>
                  }
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};

export default ParticipantModal;

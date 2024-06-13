import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import { ParticipantModalProps } from "./types";
import { Button, Modal, Portal } from "react-native-paper";

const ParticipantModal: React.FC<ParticipantModalProps> = (props) => {
  const { visible, onClose } = props;

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
            <View></View>
            <View></View>
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};

export default ParticipantModal;

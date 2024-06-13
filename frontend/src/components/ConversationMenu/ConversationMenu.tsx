import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { ConversationMenuProps } from "./types";
import { Button, Menu as PaperMenu } from "react-native-paper";
import ParticipantModal from "../ParticipantModal";

const ConversationMenu: React.FC<ConversationMenuProps> = (props) => {
  const {} = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <View style={[styles.container]}>
      <ParticipantModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <PaperMenu
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        anchor={
          <Button
            icon={"dots-vertical"}
            onPress={() => setIsVisible(!isVisible)}
          >
            {""}
          </Button>
        }
      >
        <PaperMenu.Item
          title="Manage participants"
          onPress={() => setIsModalVisible(true)}
        />
      </PaperMenu>
    </View>
  );
};

export default ConversationMenu;

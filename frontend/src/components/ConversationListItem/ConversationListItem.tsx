import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ConversationListItemProps } from "./types";
import Avatar from "../Avatar";
import { Text } from "react-native-paper";

const ConversationListItem: React.FC<ConversationListItemProps> = (props) => {
  const { conversation, onPress } = props;
  const { name, accentColor } = conversation;

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => onPress(conversation)}
    >
      <View>
        <Avatar backgroundColor={accentColor} alt={name} />
      </View>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationListItem;

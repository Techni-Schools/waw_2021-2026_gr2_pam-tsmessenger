import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { MessageInputBarProps } from "./types";
import { Button, TextInput } from "react-native-paper";

const MessageInputBar: React.FC<MessageInputBarProps> = (props) => {
  const {} = props;

  const [content, setContent] = useState<string>("");

  return (
    <View style={[styles.container]}>
      <TextInput
        mode="flat"
        style={{ flex: 1 }}
        value={content}
        onChangeText={setContent}
        autoCapitalize="none"
        keyboardAppearance="dark"
      />
      <Button mode="contained">Send</Button>
    </View>
  );
};

export default MessageInputBar;

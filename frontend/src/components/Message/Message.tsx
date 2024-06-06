import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { MessageProps } from "./types";

const Message: React.FC<MessageProps> = (props) => {
const {} = props;

return <View style={[styles.container]}></View>;
}

export default Message;
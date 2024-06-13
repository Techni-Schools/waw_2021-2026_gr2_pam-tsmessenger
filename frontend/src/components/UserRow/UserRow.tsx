import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { UserRowProps } from "./types";
import Avatar from "../Avatar";
import { Text } from "react-native-paper";
import { User } from "../../types";

const UserRow: React.FC<UserRowProps> = (props) => {
  const { user, buttonElement } = props;

  const isUserPopulated = typeof user === "object";

  return (
    <View style={[styles.container]}>
      {isUserPopulated && <Avatar src={user.photo} alt={user.username} />}
      <Text>{isUserPopulated ? user.username : user}</Text>
      {buttonElement}
    </View>
  );
};

export default UserRow;

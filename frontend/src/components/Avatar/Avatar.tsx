import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { AvatarProps } from "./types";
import { Avatar as PaperAvatar } from "react-native-paper";

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    src,
    alt,
    size = 64,
    color = "black",
    backgroundColor = "#777",
  } = props;

  const initials = alt
    .split(" ")
    .map(([firstLetter]) => firstLetter)
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <View style={[styles.container]}>
      {src ? (
        <PaperAvatar.Image source={{ uri: src }} size={size} />
      ) : (
        <PaperAvatar.Text
          label={initials}
          size={size}
          labelStyle={{ color, fontWeight: "bold" }}
          style={{ backgroundColor }}
        />
      )}
    </View>
  );
};

export default Avatar;

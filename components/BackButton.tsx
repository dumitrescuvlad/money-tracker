import { colors, radius } from "@/constants/theme";
import { BackButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton: React.FC<BackButtonProps> = ({ style, iconSize = 26 }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <AntDesign
        name="caretleft"
        size={verticalScale(iconSize)}
        color={colors.white}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.neutral600,
    alignSelf: "flex-start",
    borderRadius: radius._12,
    borderCurve: "continuous",
    padding: 5,
  },
});

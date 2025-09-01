import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Register = () => {
  return (
    <View>
      <Text>register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
    paddingHorizontal: spacingX._25,
  },
  welcomeImageWrapper: {
    position: "absolute",
    top: verticalScale(80),
    left: 0,
    right: 0,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeImage: {
    flex: 1,
    width: verticalScale(300),
    height: verticalScale(300),
  },

  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});

import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, View } from "react-native";

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton style={styles.backButton} iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Hey
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome back
          </Typo>
        </View>
        {/*Form*/}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login now to track your expenses
          </Typo>
          <Input containerStyle={{ width: "100%" }} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    paddingHorizontal: spacingX._25,
  },
  backButton: {
    position: "absolute",
    top: verticalScale(20),
    left: 20,
    zIndex: 10,
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
  form: {
    width: "100%",
    marginTop: spacingY._20,
    gap: spacingY._10,
  },
});

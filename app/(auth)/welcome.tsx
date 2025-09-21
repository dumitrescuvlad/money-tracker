import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/*login button*/}
        <View>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={styles.loginButton}
          >
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>

          <Animated.View
            entering={FadeIn.duration(1000)}
            style={styles.welcomeImageWrapper}
            pointerEvents="none"
          >
            <Animated.Image
              source={require("../../assets/images/welcome.png")}
              style={styles.welcomeImage}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </View>

      {/* footer*/}
      <View style={styles.footer}>
        <Animated.View
          entering={FadeInDown.duration(1000).springify().damping(12)}
          style={{ alignItems: "center" }}
        >
          <Typo size={30} fontWeight={"800"} style={{ textAlign: "center" }}>
            Welcome to Money Tracker!
          </Typo>
          <Typo size={30} fontWeight={"800"} style={{ textAlign: "center" }}>
            Check your stats and manage your budget all in one place.
          </Typo>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000)
            .delay(100)
            .springify()
            .damping(12)}
          style={{ alignItems: "center", gap: 2 }}
        >
          <Typo size={17} color={colors.textLight}>
            If you don&apos;t have an account,
          </Typo>
          <Typo size={17} color={colors.textLight}>
            please sign up.
          </Typo>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000)
            .delay(200)
            .springify()
            .damping(12)}
          style={styles.buttonContainer}
        >
          <Button onPress={() => router.push("/(auth)/register")}>
            <Typo size={22} color={colors.neutral900} fontWeight={"600"}>
              Get started
            </Typo>
          </Button>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

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

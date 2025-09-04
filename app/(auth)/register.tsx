import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useAuth } from "@/contexts/authContexts";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
const Register = () => {
  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");
  const nameRef = React.useRef("");

  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const { register: registerUser } = useAuth();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert("Sign up", "Please fill all the fields");
      return;
    }
    setIsLoading(true);
    const res = await registerUser(
      emailRef.current,
      passwordRef.current,
      nameRef.current
    );
    console.log("register result", res);
    setIsLoading(false);
    if (!res.success) {
      Alert.alert("Sign up", res.msg);
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton style={styles.backButton} iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Let&apos;s
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            get started
          </Typo>
        </View>
        {/*Form*/}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account
          </Typo>
          <Input
            containerStyle={{ width: "100%" }}
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
            icon={
              <Icons.User // deprecated, fix later @@@@@@@@@@@@@@@@
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            containerStyle={{ width: "100%" }}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <Icons.At // deprecated, fix later @@@@@@@@@@@@@@@@
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            containerStyle={{ width: "100%" }}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(value) => (passwordRef.current = value)}
            icon={
              <Icons.Lock // deprecated, fix later @@@@@@@@@@@@@@@@
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>
              Sign up
            </Typo>
          </Button>
        </View>
        {/**footer */}
        <View style={styles.footer}>
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={() => router.navigate("/(auth)/login")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              {" "}
              Login
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;
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
    elevation: 10,
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

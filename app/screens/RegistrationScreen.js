import { Platform, StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import Colors from "../Shares/Colors";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { AppwriteContext } from "../appwrite/AppwriteContext"; // Update the path

import AppTextInput from "../Component/AppTextInput";
import AppButton from "../Component/AppButton";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).max(20),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(4),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegistrationScreen = ({ navigation }) => {
  const { appwrite } = useContext(AppwriteContext); // Access the Appwrite service from context

  const handleRegistration = async (values) => {
    const { username, email, password } = values;

    try {
      // Register the user using Appwrite
      await appwrite.createAccount({
        email,
        password,
        name: username, // Use the provided username as the name
      });

      // Automatically log in the user after registration
      await appwrite.login({ email, password });

      navigation.navigate("Home", { email });
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topTxt}>Naturex</Text>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "", // Add password field to initialValues
          confirmPassword: "",
        }}
        onSubmit={handleRegistration}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              icon={"account-circle-outline"}
              placeholder="Username"
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
            />
            {touched.username && (
              <Text style={styles.text}>{errors.username}</Text>
            )}
            <AppTextInput
              icon={"email-outline"}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && <Text style={styles.text}>{errors.email}</Text>}
            <AppTextInput
              icon={"lock-outline"} // Password icon
              placeholder="Password"
              secureTextEntry // Secure text entry for password
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            {touched.password && (
              <Text style={styles.text}>{errors.password}</Text>
            )}
            <AppTextInput
              icon={"lock-outline"}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={() => setFieldTouched("confirmPassword")}
            />
            {touched.confirmPassword && (
              <Text style={styles.text}>{errors.confirmPassword}</Text>
            )}
            <AppButton
              onPress={handleSubmit}
              btnStyle={styles.btn}
              text="Register"
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 20 : 0,
    alignItems: "center",
  },
  topTxt: {
    color: Colors.navyblue,
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 50,
    alignSelf: "center",
  },
  btn: {
    width: "80%",
    backgroundColor: Colors.light,
    borderRadius: 25,
    alignItems: "center",
    padding: 20,
    margin: 20,
  },
  text: {
    color: "red",
  },
});

export default RegistrationScreen;

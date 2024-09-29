import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppwriteContext } from "../appwrite/AppwriteContext";
import { TextInput, Pressable } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().min(3).max(100),
  password: Yup.string().required().min(4),
});

const LoginScreen = ({ navigation }) => {
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);

  const handleLogin = (values) => {
    const { email, password } = values;

    if (email.length < 1 || password.length < 1) {
      setError("All fields are required");
    } else {
      const user = {
        email,
        password,
      };
      appwrite
        .login(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
            console.log("logged in", response);
            navigation.navigate("Home");
          }
        })
        .catch((e) => {
          console.log(e);
          Alert.alert("Error", "Incorrect Email or Password");
          setEmail("Incorrect email or password");
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            {/* Email */}
            <TextInput
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholderTextColor="#AEAEAE"
              placeholder="Email"
              style={styles.input}
            />

            {/* Password */}
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholderTextColor="#AEAEAE"
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />

            {/* Validation error */}
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Login button */}
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
  input: {
    backgroundColor: "#fef8fa",
    padding: 10,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    width: "80%",
    color: "#000000",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#ffffff",
    padding: 10,
    height: 45,
    alignSelf: "center",
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
  btnText: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginScreen;

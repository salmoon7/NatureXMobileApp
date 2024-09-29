import { AsyncStorage } from "react-native";

const Demo = async () => {
  try {
    await AsyncStorage.setItem("Person", JSON.stringify({ id: 1 }));
    const result = await AsyncStorage.getItem(JSON.parse("Person"));
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
Demo();
export default Demo;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AuthNavigation from "./app/navigation/AuthNavigation";
import AppNavigation from "./app/navigation/AppNavigation";
// import TabNavigators from "./app/navigation/TabNavigators";
// import { AppwriteContext } from "./app/appwrite/AppwriteContext";
// import { ActivityIndicator } from "react-native";
import ImageCard from "./app/Component/ImageCard";
import SearchImage from "./app/Component/SearchImage";
import SearchScreen from "./app/screens/SearchScreen";
const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  // useEffect(() => {
  // //   const checkCurrentUser = async () => {
  // //     try {
  // //       console.log("Checking current user...");
  // //       const response = await appwrite.getCurrentUser();
  // //       console.log("getCurrentUser response:", response);

  // //       setIsLoading(false);

  // //       if (response) {
  // //         console.log("User is logged in. Setting isLoggedIn to true.");
  // //         setIsLoggedIn(true);
  // //       } else {
  // //         console.log("User is not logged in. Setting isLoggedIn to false.");
  // //         setIsLoggedIn(false);
  // //       }
  // //     } catch (error) {
  // //       console.error("Error checking current user:", error);
  // //       setIsLoading(false);
  // //       setIsLoggedIn(false);
  // //     }
  // //   };

  // //   checkCurrentUser();
  // // }, [appwrite, setIsLoggedIn]);

  // // if (isLoading) {
  // //   console.log("App is still loading...");
  // //   return <ActivityIndicator size="large" color="blue" />;
  // // }

  // // console.log("App is loaded. isLoggedIn:", isLoggedIn);

  // return (
  //   // <NavigationContainer>
  //   //   {isLoggedIn ? (
  //   //     <>
  //   //       <AuthNavigation />
  //   //       {console.log("Rendered AppNavigation")}
  //   //     </>
  //   //   ) : (
  //   //     <>
  //   //       <TabNavigators />
  //   //       {console.log("Rendered AuthNavigation")}
  //   //     </>
  //   //   )}
  //   // </NavigationContainer>r
  // );
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;

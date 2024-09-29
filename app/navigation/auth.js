// auth.js
import Appwrite from "appwrite";

const appwrite = new Appwrite();

// Replace these values with your Appwrite project details
appwrite
  .setEndpoint("https://cloud.appwrite.io/v1") // replace with your Appwrite endpoint
  .setProject("656dd6e034d5d148bcb9"); // replace with your Appwrite project ID

export const checkAuthentication = async () => {
  try {
    // Check the user's authentication state using Appwrite
    const response = await appwrite.account.get();

    // Return true if the user is authenticated, false otherwise
    return response.$id ? true : false;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};

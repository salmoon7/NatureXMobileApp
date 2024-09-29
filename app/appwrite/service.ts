import { ID, Account, Client } from "appwrite";
import { Alert } from "react-native";

// import Snackbar from "react-native-snackbar";

const appwriteClient = new Client();

const APPWRITE_ENDPOINT: string = "https://cloud.appwrite.io/v1";

const APPWRITE_PROJECT_ID: string = "656dd6e034d5d148bcb9";

type CreateUserAccount = {
  name: string;
  email: string;
  password: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }
  //create a new record of user inside appwrite

  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //todo: create login feature
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      // Snackbar.show({
      //   text: String(error),
      //   duration: Snackbar.LENGTH_SHORT,
      // });
      Alert.alert("Error", "Incorrect Email or Password");
      console.log("Appwrite service ::  createAccount():: " + error);
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      // Snackbar.show({
      //   text: String(error),
      //   duration: Snackbar.LENGTH_LONG,
      // });

      console.log("Appwrite service ::  LoginAccount():: " + error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service ::  getCurrentAccount():: " + error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
      
    } catch (error) {
      console.log("Appwrite service ::  delerCurrentAccount():: " + error);
    }
  }
}

export default AppwriteService;

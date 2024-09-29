import { Client, Account } from "appwrite";

const appwrite = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // replace with your Appwrite endpoint
  .setProject("656dd6e034d5d148bcb9"); // replace with your Appwrite project ID

const account = new Account(appwrite);

export default account;

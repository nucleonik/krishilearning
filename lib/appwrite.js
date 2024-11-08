import { Alert } from 'react-native';
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from 'react-native-appwrite';

export const Config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.krishishwapno.krishilearningapp',
  projectId: '672d07e0003576e5099e',
  databaseId: '672d0d96003931e9686d',
  userCollectionId: '672d0dbd003cb2db7d9d',
  videoCollectionId: '672d0e7f002597a58441',
  studyMaterialsCollectionId: '672d0e6200019241f78d',
  storageId: '672d1038002cea77a6c7',
};

const client = new Client();

client
  .setEndpoint(Config.endpoint)
  .setProject(Config.projectId)
  .setPlatform(Config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error('Account creation failed');

    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);

    const newUser = await databases.createDocument(
      Config.databaseId,
      Config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error.message || 'Account creation failed');
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    if (error.message.includes('missing scope (account)')) {
      Alert.alert(
        'Authentication Error',
        'Please sign in again to access your account.'
      );
    } else {
      console.error('Sign-in error:', error.message);
    }
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    const currentUser = await databases.listDocuments(
      Config.databaseId,
      Config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser || currentUser.documents.length === 0) {
      throw new Error('User not found in database');
    }

    return currentUser.documents[0];
  } catch (error) {
    console.error('Error fetching current user:', error.message);
    throw error;
  }
};




import { Client, Databases, Query, Account, ID } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client();

client
  .setEndpoint(ENDPOINT) // Your Appwrite endpoint URL
  .setProject(PROJECT_ID); // Your project ID

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account, ID };  // export ID so you can use it in your auth files

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    console.log('Project ID:', PROJECT_ID);
    console.log('Database ID:', DATABASE_ID);
    console.log('Collection ID:', COLLECTION_ID);

    const results = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal('searchTerm', searchTerm)]
    );

    if (results.documents.length > 0) {
      const document = results.documents[0];
      const updatedCount = (document.count || 0) + 1;

      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        document.$id,
        { count: updatedCount }
      );
    } else {
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : '',
      });
    }
  } catch (error) {
    console.error('Error updating search count:', error);
  }
};
console.log("Appwrite config loaded:");
console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log("Endpoint:", import.meta.env.VITE_APPWRITE_ENDPOINT);

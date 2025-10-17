
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// import { Client, Databases, Query } from 'appwrite';

// const client = new Client();
// client
  
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
//   .setProject(PROJECT_ID); // Your project ID
    
// const databases = new Databases(client);

// export const updateSearchCount = async (searchTerm ,movie) => {
  
//   //1 use the databases object to get the document by its ID
//   // use appwrite  sdk  to check searchTerm in database exists or not
//   // if exists update the count by 1
//   // if not create a new document with count 1

//   try {
     
//     const results = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries, [
      
//       Query.equal('searchTerm', searchTerm),

//     ]);
//     // if it does update the count by 1
//     if (results.length > 0) {
//       const document = results[0];
//       const updatedCount = document.count + 1;
//       await databases.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
//         count: updatedCount,
//       });
//     }
//     // if not create a new document with count 1
//     else {
//       await databases.createDocument(DATABASE_ID, COLLECTION_ID, {
//         searchTerm: searchTerm,
//         count: 1,
//         movie_id: movie.id,
//         poster_url: 'https://image.tmdb.org/t/p/w500${movie.poster_path}',
//       });
//     }

    
//    } catch (error) {
    
//    }


  
//   // console.log("Project ID:", PROJECT_ID);
//   // console.log("API Key:",DATABASE_ID );
//   // console.log("API Key:", COLLECTION_ID );




//  }




// import { Client, Databases, Query } from 'appwrite';

// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
// const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

// const client = new Client();

// client
//   .setEndpoint(ENDPOINT) // from .env
//   .setProject(PROJECT_ID);

// const databases = new Databases(client);

// export const updateSearchCount = async (searchTerm, movie) => {
//   try {


//     console.log('Project ID:', PROJECT_ID);
//     console.log('Database ID:', DATABASE_ID);
//     console.log('Collection ID:', COLLECTION_ID);


//     // ✅ Query should be passed as an array directly
//     const results = await databases.listDocuments(
//       DATABASE_ID,
//       COLLECTION_ID,
//       [Query.equal('searchTerm', searchTerm)]
//     );

//     // results.documents contains the list
//     if (results.documents.length > 0) {
//       const document = results.documents[0];
//       const updatedCount = document.count + 1;

//       await databases.updateDocument(
//         DATABASE_ID,
//         COLLECTION_ID,
//         document.$id,
//         { count: updatedCount }
//       );
//     } else {
//       // ✅ Use backticks for template literal
//       await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
//         searchTerm,
//         count: 1,
//         movie_id: movie.id,
//         poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//       });
//     }
//   } catch (error) {
//     console.error('Error updating search count:', error);
//   }
// };




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

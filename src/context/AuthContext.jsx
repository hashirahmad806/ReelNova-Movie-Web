// // src/context/AuthContext.jsx

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { account, ID } from '../Appwrite';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // On mount: try to get current user session
//   useEffect(() => {
//     const initUser = async () => {
//       try {
//         const res = await account.get();
//         setUser(res);
//       } catch (err) {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     initUser();
//   }, []);

//   // Register a new user
//   const register = async (name, email, password) => {
//     // Create account
//     await account.create({
//       userId: ID.unique(),
//       email,
//       password,
//       name,
//     });
//     // Then login
//     return login(email, password);
//   };

//   // Login existing user
//   const login = async (email, password) => {
//     const session = await account.createEmailPasswordSession(email, password);
//     // After login, fetch user details
//     const userDetails = await account.get();
//     setUser(userDetails);
//     return session;
//   };

//   const logout = async () => {
//     await account.deleteSession('current');
//     setUser(null);
//   };

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {loading ? <div>Loading...</div> : children}
//     </AuthContext.Provider>
//   );
// }



// src/context/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { account, ID } from '../Appwrite';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount: check if a user session exists and load user data
  useEffect(() => {
    const initUser = async () => {
      try {
        const res = await account.get();
        setUser(res);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initUser();
  }, []);

  // Register a new user and then log them in
  const register = async (name, email, password) => {
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    return login(email, password);
  };

  // Login existing user and update user state
  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    const userDetails = await account.get();
    setUser(userDetails);
  };

  // Logout current user by deleting the session and clearing state
  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

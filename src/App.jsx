
// import './index.css'
// import Gernal from './Gernal.jsx';
// import { Link, Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar.jsx';
// import Favorites from './components/Favorites.jsx';
// import ContactForm from './pages/ContactForm.jsx';
// import AboutUs from './pages/AboutUs.jsx';
// import AuthForm from './pages/AuthForm.jsx';


// function App() {
  
//   return (
//     <main >
//       <Navbar />
       
//       <Routes >
//         <Route path="/" element={<Gernal />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/contact" element={<ContactForm />} />
//         <Route path="/about" element={<AboutUs/>}/>
//         <Route path="/login" element={<AuthForm/>}/>
        
//       </Routes>

     

      
//     </main>
//   )
// }

// export default App









// src/App.jsx
import './index.css';
import Gernal from './Gernal.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Favorites from './components/Favorites.jsx';
import ContactForm from './pages/ContactForm.jsx';
import AboutUs from './pages/AboutUs.jsx';
import AuthForm from './pages/AuthForm.jsx';

import { AuthProvider, useAuth } from './context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-white p-8">Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return children;
}

function App() {
  return (
    <AuthProvider>
      <main>
        <Navbar />

        <Routes>
          {/* Public */}
          <Route path="/login" element={<AuthForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Gernal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;

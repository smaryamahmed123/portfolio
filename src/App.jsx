import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import theme from './theme';
import trackVisitor from './utils/trackVisitor';
import Admin from './pages/Admin';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';

function App() {
  useEffect(() => {
    trackVisitor();
  }, []);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setIsAdmin(decodedToken.role === 'admin');
      } catch (e) {
        // Token is invalid or expired
      }
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} requiredRole="admin" />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

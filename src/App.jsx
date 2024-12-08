import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import PresentationDetails from './pages/PresentationDetails';
import Categories from './pages/Categories';
import Trending from './pages/Trending';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProtectedRoute from './utils/protectedRoute';
import useAuth from './hooks/useAuth';
import FAQ from './pages/FAQ';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:id" element={<PresentationDetails />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Protected Routes */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            {/* Fallback for Undefined Routes */}
            <Route
              path="*"
              element={
                <div className="text-center py-16">
                  <h1 className="text-4xl font-bold">404</h1>
                  <p className="text-gray-600 mt-4">Page Not Found</p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

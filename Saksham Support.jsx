import React from 'react';
import './App.css'; // CSS file import karein

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Saksham Support</div>
     <Navigation className="navigation">
     <ul>
     <li><a href="#home">Home</a></li>
     <li><a href="#shop">Equipment Shop</a></li>
    <li><a href="#services">Gov Services</a></li>
     <li><a href="#contact">Contact</a></li>
    </ul>
     </Navigation>
      </header>

      {/* Main Hero Section */}
      <section id="home" className="hero-section">
        <h1>Empowering Lives, Enabling Futures</h1>
        <p>One-stop platform for physically challenged individuals.</p>
      </section>

      {/* Features Section */}
      <section id="services" className="features-section">
        <h2>Our Services</h2>
        <div className="feature-grid">
          <div className="feature-card">Special Equipment</div>
          <div className="feature-card">Gov Exams & Jobs</div>
          <div className="feature-card">Travel Assistance</div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Saksham Support. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

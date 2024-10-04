
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CaesarCipher from './components/CaesarCipher';
import ScytaleCipher from './components/ScytaleCipher';
import SymmetricMethod from './components/SymmetricMethod';
import AsymmetricMethod from './components/AsymmetricMethod';
import HashMethod from './components/HashMethod';
import DocumentacionComparacion from './components/DocumentacionComparacion';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<h2>Bienvenido a Cifrado y Decifrado</h2>} />
            <Route path="/caesar-scytale" element={<><CaesarCipher /><ScytaleCipher /></>} />
            <Route path="/symmetric" element={<SymmetricMethod />} />
            <Route path="/asymmetric" element={<AsymmetricMethod />} />
            <Route path="/hash" element={<HashMethod />} />
            <Route path="/documentacion" element={<DocumentacionComparacion />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '20px',
    textAlign: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
};

export default App;

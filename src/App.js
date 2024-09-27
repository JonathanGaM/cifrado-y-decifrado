// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CaesarCipher from './components/CaesarCipher';
import ScytaleCipher from './components/ScytaleCipher';


function App() {
  return (
    <div className="App">
      <Header />
      <div style={styles.container}>
        <CaesarCipher />
        <ScytaleCipher />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', // Usar flexbox para alinear en fila
    justifyContent: 'space-around', // Espaciar uniformemente entre los formularios
    alignItems: 'flex-start', // Alinear los elementos al inicio verticalmente
    padding: '20px',
    textAlign: 'center',
    gap: '20px', // Espacio entre los dos formularios
    flexWrap: 'wrap', // Hacer que los formularios se reorganicen en filas en pantallas pequeñas
  },
};

export default App;

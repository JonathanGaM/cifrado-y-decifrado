// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Cifrado y Decifrado: César y Escítala</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#9B1B30', // Color rojo oscuro (sangrineta)
    

    padding: '10px',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    marginTop: 'auto', // Asegura que el footer esté al final
    position: 'relative', // Permite que el footer se mantenga al final
    bottom: 0,
  },
  title: {
    fontSize: '24px', // Tamaño del texto
  },
  // Media queries para hacer el header responsivo
  '@media (max-width: 768px)': {
    title: {
      fontSize: '20px', // Tamaño de texto más pequeño en pantallas pequeñas
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '18px', // Tamaño de texto aún más pequeño en pantallas muy pequeñas
    },
  },
};

export default Header;

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Cifrado App. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    marginTop: 'auto', // Asegura que el footer esté al final
    position: 'relative', // Permite que el footer se mantenga al final
    bottom: 0,
  },
  text: {
    margin: 0, // Elimina el margen
    fontSize: '1rem', // Tamaño de fuente adaptable
  }
};

export default Footer;

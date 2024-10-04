import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Cifrado y Descifrado</h1>
      <div style={styles.buttonContainer}>
        <Link to="/caesar-scytale" style={styles.link}>
          <button 
            style={styles.button} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
          >
            Cifrado César y Escítala
          </button>
        </Link>
        <Link to="/symmetric" style={styles.link}>
          <button 
            style={styles.button} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
          >
            Método Simétrico
          </button>
        </Link>
        <Link to="/asymmetric" style={styles.link}>
          <button 
            style={styles.button} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
          >
            Método Asimétrico
          </button>
        </Link>
        <Link to="/hash" style={styles.link}>
          <button 
            style={styles.button} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
          >
            Hash
          </button>
        </Link>
        {/* Nuevo botón para Documentación y Comparación */}
        <Link to="/documentacion" style={styles.link}>
          <button style={styles.button}>Documentación y Comparación</button>
        </Link>
         
      
      </div>
    </header>
  );
};

// Función para manejar la animación de sombreado en los botones
const handleMouseEnter = (event) => {
  event.target.style.backgroundColor = '#E0E0E0'; // Cambia a gris claro al pasar el cursor
  event.target.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.15)';
};

const handleMouseLeave = (event) => {
  event.target.style.backgroundColor = '#FFFFFF'; // Vuelve al color blanco cuando el cursor sale
  event.target.style.boxShadow = 'none';
};

const handleMouseDown = (event) => {
  event.target.style.transform = 'scale(0.95)'; // Reduce ligeramente el tamaño al presionar
};

const handleMouseUp = (event) => {
  event.target.style.transform = 'scale(1)'; // Vuelve al tamaño original
};

const styles = {
  header: {
    backgroundColor: '#000000', // Fondo negro
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
  },
  title: {
    fontSize: '30px',
    fontFamily: "'Roboto', sans-serif",
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FFFFFF', // Fondo blanco
    color: '#000000', // Texto negro
    border: '2px solid #B0B0B0', // Borde gris claro
    padding: '10px 20px', // Tamaño reducido
    margin: '8px',
    borderRadius: '30px', // Bordes redondeados pero más pequeños
    cursor: 'pointer',
    fontSize: '16px', // Tamaño de fuente reducido
    fontFamily: "'Roboto', sans-serif",
    transition: 'all 0.3s ease-in-out', // Transición suave
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', // Sombra inicial ligera
  },
  link: {
    textDecoration: 'none',
  },
};

export default Header;

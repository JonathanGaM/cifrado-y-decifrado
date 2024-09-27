import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md'; // Importa el ícono de copiar

const CaesarCipher = () => {
  const [message, setMessage] = useState('');
  const [shift, setShift] = useState(1); // Valor por defecto de 1
  const [cipheredMessage, setCipheredMessage] = useState('');
  const [showGuide, setShowGuide] = useState(false); // Estado para mostrar/ocultar la ventana emergente
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mostrar mensajes de error

  const caesarCipher = (str, shift) => {
    return str
      .split('')
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let newCode = code;

          if (code >= 65 && code <= 90) {
            newCode = ((code - 65 + shift) % 26 + 26) % 26 + 65; // Asegura que el valor sea positivo
          } else if (code >= 97 && code <= 122) {
            newCode = ((code - 97 + shift) % 26 + 26) % 26 + 97; // Asegura que el valor sea positivo
          }
          return String.fromCharCode(newCode);
        }
        return char;
      })
      .join('');
  };

  const handleEncrypt = () => {
    if (!message) {
      setErrorMessage('Por favor ingrese un mensaje antes de cifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar mensaje de error
    const encryptedMessage = caesarCipher(message, parseInt(shift));
    setCipheredMessage(encryptedMessage);
  };

  const handleDecrypt = () => {
    if (!message) {
      setErrorMessage('Por favor ingrese un mensaje antes de decifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar mensaje de error
    const decryptedMessage = caesarCipher(message, -parseInt(shift)); // Aplicar desplazamiento negativo
    setCipheredMessage(decryptedMessage);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cipheredMessage);
    alert('Mensaje cifrado copiado al portapapeles!');
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide); // Cambiar el estado de la ventana emergente
  };

  // Estilos en línea para el componente
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative', // Permite que el botón "Guía" se posicione
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    largeInput: {
      height: '100px', // Aumenta la altura del campo de entrada
    },
    button: {
      width: '48%',
      padding: '10px',
      backgroundColor: '#c0392b', // Rojo oscuro
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginRight: '4%',
    },
    buttonHover: {
      backgroundColor: '#a93226', // Rojo más oscuro para hover
    },
    resultContainer: {
      marginTop: '20px',
    },
    resultTitle: {
      textAlign: 'left',
      fontSize: '18px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    resultBox: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#e9ecef',
      borderRadius: '5px',
      wordWrap: 'break-word',
      minHeight: '50px', // Asegura que el cuadro tenga una altura mínima
    },
    resultText: {
      flex: 1,
    },
    copyIcon: {
      marginLeft: '10px',
      cursor: 'pointer',
      fontSize: '24px',
      color: '#a93226',
    },
    guideButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#a93226',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 12px',
      cursor: 'pointer',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: '1000',
      width: '300px',
      height: '400px', // Altura fija para que el contenido sea desplazable
      overflowY: 'auto', // Hace que el contenido sea desplazable verticalmente
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '999',
    },
    closeButton: {
      backgroundColor: 'transparent', // Fondo transparente
      color: '#c0392b',
      border: 'none',
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    errorMessage: {
      color: '#c0392b',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cifrado César</h2>
      <textarea
        style={styles.input} // Usar textarea para mayor tamaño
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Desplazamiento"
        style={styles.input}
        value={shift}
        min="1" // Evitar números negativos
        onChange={(e) => setShift(Math.max(1, e.target.value))} // No permitir números menores a 1
      />
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Mostrar advertencia */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleEncrypt}
        >
          Cifrar
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleDecrypt}
        >
          Decifrar
        </button>
      </div>
      <div style={styles.resultContainer}>
        <h3 style={styles.resultTitle}>Resultado:</h3>
        <div style={styles.resultBox}>
          <p style={styles.resultText}>{cipheredMessage}</p>
          <MdContentCopy
            style={styles.copyIcon}
            onClick={handleCopy}
            title="Copiar mensaje"
          />
        </div>
      </div>

      {/* Botón de Guía */}
      <button style={styles.guideButton} onClick={toggleGuide}>Guía</button>

      {/* Modal para mostrar la guía */}
      {showGuide && (
        <>
          <div style={styles.overlay} onClick={toggleGuide}></div> {/* Cierra el modal si se hace clic en la superposición */}
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={toggleGuide}>
              &times; {/* Agrega la "X" en la esquina superior derecha */}
            </button>
            <h3>¿Qué es el Cifrado César?</h3>
            <p>
              El Cifrado César es una técnica antigua de cifrado que consiste en desplazar las letras del alfabeto en una cantidad fija.
              Este desplazamiento se conoce como "clave" o "shift".
            </p>
            <p>
              Ejemplo: Si desplazamos "A" con una clave de +1, obtendremos "B". 
            </p>
            <h4>Pasos para usar:</h4>
            <ul>
              <li>Introduce el mensaje que quieres cifrar o decifrar.</li>
              <li>Establece el número de desplazamiento (shift).</li>
              <li>Haz clic en "Cifrar" para aplicar el cifrado o en "Decifrar" para revertirlo.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CaesarCipher;

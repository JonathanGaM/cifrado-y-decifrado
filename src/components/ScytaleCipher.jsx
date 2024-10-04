import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md'; // Importa el ícono de copiar

const ScytaleCipher = () => {
  const [message, setMessage] = useState('');
  const [railCount, setRailCount] = useState(1); // Valor por defecto es 1
  const [cipheredMessage, setCipheredMessage] = useState('');
  const [showGuide, setShowGuide] = useState(false); // Estado para mostrar/ocultar la ventana emergente
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mostrar mensajes de error

  const scytaleCipher = (str, rails) => {
    const length = Math.ceil(str.length / rails);
    const paddedMessage = str.padEnd(length * rails, ' '); 
    const result = [];

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < rails; j++) {
        result.push(paddedMessage[i + j * length]);
      }
    }
    return result.join('');
  };

  const handleEncrypt = () => {
    if (!message) {
      setErrorMessage('Por favor, ingrese un mensaje antes de cifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar el mensaje de error si no hay problemas
    const encryptedMessage = scytaleCipher(message, railCount);
    setCipheredMessage(encryptedMessage);
  };

  const handleDecrypt = () => {
    if (!message) {
      setErrorMessage('Por favor, ingrese un mensaje antes de descifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar el mensaje de error si no hay problemas
    // Para el descifrado, revertir el proceso de cifrado
    const length = Math.ceil(message.length / railCount);
    const result = Array.from({ length: message.length }, () => ' ');

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < railCount; j++) {
        const index = i + j * length;
        if (index < message.length) {
          result[index] = message.charAt(i * railCount + j);
        }
      }
    }
    setCipheredMessage(result.join('').trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cipheredMessage);
    alert('Mensaje cifrado copiado al portapapeles!');
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide); // Cambiar el estado de la ventana emergente
  };

  // Validación para evitar números negativos o cero en railCount
  const handleRailCountChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10)); // Al menos 1
    setRailCount(value);
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
      <h2 style={styles.title}>Cifrado Escítala</h2>
      <textarea
        style={styles.input}
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de filas"
        style={styles.input}
        value={railCount}
        onChange={handleRailCountChange} // Validación de número de filas
      />
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Mostrar advertencia */}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          style={styles.button}
          onClick={handleEncrypt}
        >
          Cifrar
        </button>
        <button
          style={styles.button}
          onClick={handleDecrypt}
        >
          Descifrar
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
            <h3>¿Qué es el Cifrado Escítala?</h3>
            <p>
              El Cifrado Escítala es un método de cifrado antiguo en el que se utiliza un cilindro alrededor del cual se enrolla una cinta. 
              Las letras del mensaje se escriben en la cinta, y al desenrollarla, se obtiene el mensaje cifrado.
            </p>
            <h4>¿Cómo funciona el cifrado?</h4>
            <p>
              Se selecciona un número que representa la cantidad de filas (o "rails") sobre las que se distribuye el mensaje original. 
              Luego, se reordena siguiendo este patrón para obtener el mensaje cifrado.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ScytaleCipher;

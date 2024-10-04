import React, { useState } from 'react';
import './style.css';

function whirlpool(data) {
  let hash = '';
  for (let i = 0; i < data.length; i++) {
    hash += (data.charCodeAt(i) % 256).toString(16).padStart(2, '0');
  }
  return hash.toUpperCase();
}

const HashMethod = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputData, setInputData] = useState('');
  const [hashedData, setHashedData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar/ocultar instrucciones

  const handleHash = () => {
    // Validar que todos los campos tengan valor
    if (!name || !email || !password || !inputData) {
      setErrorMessage('Por favor, complete todos los campos.');
      return; // Salir de la función si hay un error
    }

    setErrorMessage(''); // Limpiar mensaje de error si todo es válido

    // Concatenamos los valores de los campos en una sola cadena
    const combinedData = `${name}${email}${password}${inputData}`;
    const hash = whirlpool(combinedData);
    setHashedData(hash);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions); // Cambiar estado de mostrar/ocultar instrucciones
  };

  return (
    <div className="container">
      <button onClick={toggleInstructions} className="instructionButton">
        Cómo se usa el formulario
      </button>

      {showInstructions && (
        <div className="instructions">
          <p>
            Para usar este formulario, complete todos los campos: nombre, correo,
            contraseña y el texto que desea hashear. Luego, haga clic en el botón
            "Hashear" para generar el hash.
          </p>
        </div>
      )}

      <h2>Método de Hash: Whirlpool</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingrese su nombre"
        className="inputField"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingrese su correo"
        className="inputField"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingrese su contraseña"
        className="inputField"
      />

      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Ingrese el texto a hashear"
        className="inputField"
      />

      <button onClick={handleHash} className="button">Hashear</button>

      {errorMessage && <p className="error">{errorMessage}</p>} {/* Mostrar mensaje de error */}

      <h3>Resultado:</h3>
      <p className="output">{hashedData}</p>
    </div>
  );
};

export default HashMethod;

import React, { useState } from 'react';
import crypto from 'crypto-js';
import './styles.css';

const SymmetricMethod = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');
  const [encryptedData, setEncryptedData] = useState({
    name: '',
    address: '',
    password: ''
  });
  const [decryptedData, setDecryptedData] = useState({
    name: '',
    address: '',
    password: ''
  });
  const [showEncrypted, setShowEncrypted] = useState(false);
  const [showDecrypted, setShowDecrypted] = useState(false);
  const [error, setError] = useState('');
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar/ocultar instrucciones

  // Manejo de cifrado
  const handleEncrypt = () => {
    if (!name || !address || !password || !key) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');

    const encryptedName = crypto.RC4.encrypt(name, key).toString();
    const encryptedAddress = crypto.RC4.encrypt(address, key).toString();
    const encryptedPassword = crypto.RC4.encrypt(password, key).toString();

    setEncryptedData({
      name: encryptedName,
      address: encryptedAddress,
      password: encryptedPassword
    });
    setDecryptedData({}); // Limpiar datos descifrados al cifrar nuevos
    setShowEncrypted(true); // Mostrar el formulario cifrado
  };

  // Manejo de descifrado
  const handleDecrypt = () => {
    if (!encryptedData.name || !encryptedData.address || !encryptedData.password || !key) {
      setError('Por favor, completa todos los campos de cifrado.');
      return;
    }
    setError('');

    const decryptedName = crypto.RC4.decrypt(encryptedData.name, key).toString(crypto.enc.Utf8);
    const decryptedAddress = crypto.RC4.decrypt(encryptedData.address, key).toString(crypto.enc.Utf8);
    const decryptedPassword = crypto.RC4.decrypt(encryptedData.password, key).toString(crypto.enc.Utf8);

    setDecryptedData({
      name: decryptedName,
      address: decryptedAddress,
      password: decryptedPassword
    });
    setShowDecrypted(true); // Mostrar el formulario descifrado
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
            Para usar este formulario, ingrese su nombre, dirección, contraseña y una clave de cifrado. Luego, haga clic en "Cifrar Datos" para cifrar la información. Para descifrar, complete los campos de datos cifrados y haga clic en "Descifrar Datos" para ver la información original.
          </p>
        </div>
      )}

      <h3>Formulario de Datos Personales (Cifrado Simétrico)</h3>
      {error && <p className="error">{error}</p>}
      {/* Campos para los datos personales */}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputField"
      />
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="inputField"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputField"
      />
      <input
        type="text"
        placeholder="Clave de Cifrado"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="inputField"
      />
      <div className="buttons">
        <button onClick={handleEncrypt} className="button">Cifrar Datos</button>
        <button onClick={handleDecrypt} className="button">Descifrar Datos</button>
      </div>

      {/* Formulario para mostrar datos cifrados (solo se muestra al presionar Cifrar) */}
      {showEncrypted && (
        <>
          <h3>Datos Cifrados</h3>
          <input
            type="text"
            placeholder="Nombre Cifrado"
            value={encryptedData.name || ''}
            readOnly
            className="inputField"
          />
          <input
            type="text"
            placeholder="Dirección Cifrada"
            value={encryptedData.address || ''}
            readOnly
            className="inputField"
          />
          <input
            type="text"
            placeholder="Contraseña Cifrada"
            value={encryptedData.password || ''}
            readOnly
            className="inputField"
          />
        </>
      )}

      {/* Formulario para mostrar datos descifrados (solo se muestra al presionar Descifrar) */}
      {showDecrypted && (
        <>
          <h3>Datos Desencriptados</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={decryptedData.name || ''}
            readOnly
            className="inputField"
          />
          <input
            type="text"
            placeholder="Dirección"
            value={decryptedData.address || ''}
            readOnly
            className="inputField"
          />
          <input
            type="text"
            placeholder="Contraseña"
            value={decryptedData.password || ''}
            readOnly
            className="inputField"
          />
        </>
      )}
    </div>
  );
};

export default SymmetricMethod;

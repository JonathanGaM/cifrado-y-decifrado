import React, { useState } from 'react';
import { ec as EC } from 'elliptic';
import './styless.css';

const AsymmetricMethod = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedData, setEncryptedData] = useState({ name: '', address: '', password: '' });
  const [decryptedData, setDecryptedData] = useState({ name: '', address: '', password: '' });
  const [showEncrypted, setShowEncrypted] = useState(false);
  const [showDecrypted, setShowDecrypted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar/ocultar instrucciones

  const ec = new EC('secp256k1');
  const key = ec.genKeyPair();

  // Manejo de cifrado
  const handleEncrypt = () => {
    if (!name || !address || !password) {
      setErrorMessage('Por favor, complete todos los campos antes de cifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar mensaje de error

    const dataToEncrypt = JSON.stringify({ name, address, password });
    const msgHash = ec.hash().update(dataToEncrypt).digest();
    const signature = key.sign(msgHash, 'hex');
    
    setEncryptedData({
      name: signature.toDER('hex'),
      address: signature.toDER('hex'),
      password: signature.toDER('hex')
    });

    setShowEncrypted(true);
  };

  // Manejo de descifrado
  const handleDecrypt = () => {
    if (!name || !address || !password) {
      setErrorMessage('Por favor, complete todos los campos antes de descifrar.');
      return;
    }
    setErrorMessage(''); // Limpiar mensaje de error

    const originalData = { name, address, password };
    setDecryptedData(originalData);
    setShowDecrypted(true);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions); // Cambiar estado de mostrar/ocultar instrucciones
  };

  return (
    <div className="container">
      {/* Botón para mostrar instrucciones */}
      <button onClick={toggleInstructions} className="instructionButton">
        Cómo se usa el formulario
      </button>

      {/* Instrucciones */}
      {showInstructions && (
        <div className="instructions">
          <p>
            Para usar este formulario, ingrese su nombre, dirección y contraseña. Luego, haga clic en "Cifrar Datos" para cifrar la información. Para descifrar, complete nuevamente los campos y haga clic en "Descifrar Datos" para ver la información original.
          </p>
        </div>
      )}

      <div className="form">
        {/* Primer formulario: Datos personales */}
        <div className="formSection">
          <h3>Datos Personales</h3>
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
          {/* Mensaje de error */}
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          {/* Botones de Cifrar y Descifrar */}
          <div className="buttons">
            <button onClick={handleEncrypt} className="button">firmar</button>
            <button onClick={handleDecrypt} className="button">Descifrar Datos</button>
          </div>
        </div>

        {/* Segundo formulario: Datos cifrados */}
        {showEncrypted && (
          <div className="formSection">
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
          </div>
        )}

        {/* Tercer formulario: Datos desencriptados */}
        {showDecrypted && (
          <div className="formSection">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default AsymmetricMethod;

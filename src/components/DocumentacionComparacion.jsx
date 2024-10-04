import React from 'react';

const DocumentacionComparacion = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN: ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA</h1>
      <h2 style={styles.subtitle}>BINA: 6</h2>
      <h3 style={styles.subtitle}>20221042 – JESUS ISRAEL ESCUDERO REYES</h3>
      <h3 style={styles.subtitle}>20221074 – JONATHAN GARCIA MARTINEZ</h3>
      <h3 style={styles.subtitle}>CUATRIMESTRE: “7” GRUPO “B”</h3>

      <h2 style={styles.sectionTitle}>Acerca de la Aplicación</h2>
<p style={styles.paragraph}>
  Esta aplicación está diseñada para manejar datos sensibles de manera segura, utilizando métodos de cifrado y hashing implementados en Vue.js y React. Permite a los usuarios ingresar información confidencial, la cual es transformada a un formato ininteligible mediante cifrado o convertida en un valor único a través de hashing, asegurando así la integridad y autenticidad de los datos. La interfaz es amigable y valida la información ingresada antes de procesarla, garantizando que solo se trabajen datos válidos. Además, ofrece la posibilidad de copiar los resultados al portapapeles para un uso fácil y práctico en otros contextos. En resumen, la aplicación no solo facilita la protección de datos, sino que también educa a los usuarios sobre la importancia del cifrado y hashing en la seguridad de su información personal.
</p>

      <h3 style={styles.sectionTitle}>Comparativa: React vs Vue</h3>

      <h4 style={styles.subsectionTitle}>1. Rendimiento</h4>
      <p style={styles.paragraph}>
        <strong>React:</strong> Se caracteriza por su eficiencia en la actualización del DOM gracias a su Virtual DOM. React minimiza las operaciones en el DOM real al realizar cambios solo en los elementos que realmente han cambiado. Esto proporciona un rendimiento fluido, especialmente en aplicaciones complejas con interacciones frecuentes.
      </p>
      <p style={styles.paragraph}>
        <strong>Vue:</strong> También utiliza un Virtual DOM, pero se considera que tiene un rendimiento ligeramente superior en aplicaciones más pequeñas y medianas. Vue optimiza automáticamente la reactividad de sus componentes, lo que permite una actualización eficiente de la UI sin necesidad de configuraciones adicionales.
      </p>

      <h4 style={styles.subsectionTitle}>2. Facilidad de Implementación</h4>
      <p style={styles.paragraph}>
        <strong>React:</strong> Aunque su curva de aprendizaje puede ser empinada para principiantes, especialmente con la comprensión de JSX y hooks, muchos desarrolladores encuentran que React es flexible y escalable. La creación de componentes reutilizables y la gestión del estado con herramientas como Redux o Context API pueden complicar la implementación inicial.
      </p>
      <p style={styles.paragraph}>
        <strong>Vue:</strong> Se considera más amigable para principiantes debido a su sintaxis más simple y su enfoque en la separación de preocupaciones. La integración de Vue en proyectos existentes es relativamente sencilla, y su documentación es muy accesible. Vue también permite una configuración más simple con menos requisitos de boilerplate en comparación con React.
      </p>
      <h3 style={styles.sectionTitle}>Decisiones de Implementación en React</h3>
      <p style={styles.paragraph}>
        La parte implementada en React se enfoca en el hashing utilizando las bibliotecas <strong>crypto-js</strong> y <strong>elliptic</strong>. Se decidió utilizar los hooks de React, como <strong>useState</strong>, para gestionar los datos de entrada y salida, actualizando el DOM cuando se generan los hashes. Además, se implementaron validaciones en los formularios de entrada para asegurar que los datos sean válidos antes de realizar cualquier operación de hashing.
      </p>
      <p style={styles.paragraph}>
        <strong>Detalles de la implementación en React:</strong>
        <ul>
          <li>Uso de <strong>crypto-js</strong> y <strong>elliptic</strong> para operaciones de hashing.</li>
          <li>Uso de <strong>useState</strong> para almacenar los valores de hash de forma reactiva.</li>
          <li>Implementación de mi propio código para realizar operaciones de hashing.</li>
          <li>Se integraron validaciones en los formularios de entrada para asegurar que los datos sean válidos antes de realizar operaciones de hashing.</li>
          <li>Integración de funciones de copia al portapapeles para mejorar la experiencia del usuario.</li>
        </ul>
      </p>

      
      <h3 style={styles.sectionTitle}>Decisiones de Implementación en Vue.js</h3>
      <p style={styles.paragraph}>
        En Vue.js, se utilizaron bibliotecas como <strong>CryptoJS</strong> para manejar el cifrado (por ejemplo, RC4) y el hashing (SHA256). Se decidió encapsular la lógica de cifrado y descifrado en componentes reutilizables, aprovechando la reactividad de Vue para actualizar la UI en tiempo real conforme el usuario interactúa con los inputs.
      </p>
      <p style={styles.paragraph}>
        <strong>Detalles de la implementación en Vue.js:</strong>
        <ul>
          <li>Uso de CryptoJS para operaciones de cifrado y hashing.</li>
          <li>Los métodos de cifrado y descifrado están encapsulados dentro de componentes de Vue, utilizando la API de composición de Vue 3.</li>
          <li>Se implementaron validaciones para verificar que los datos ingresados por el usuario son correctos antes de realizar cualquier operación criptográfica.</li>
          <li>Utilización de ref() para gestionar los datos reactivos como los resultados del cifrado y la clave.</li>
          <li>Integración de la librería vue-toastification para proporcionar retroalimentación visual al usuario.</li>
        </ul>
      </p>
      <h3 style={styles.sectionTitle}>Conclusión</h3>
      <p style={styles.paragraph}>
        En resumen, ambas implementaciones siguen un enfoque similar, adaptándose a las características específicas de cada framework. Vue.js aprovecha la reactividad de sus ref() y React se apoya en useState para gestionar el estado de las aplicaciones. Ambos frameworks utilizan CryptoJS como la biblioteca base para las operaciones criptográficas.
      </p>
      
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Times New Roman, Times, serif',
    lineHeight: '1.6',
    maxWidth: '850px', // Asegura que el contenido no se extienda demasiado
    margin: '0 auto', // Centra el contenido
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '30px',
    textAlign: 'left',
  },
  subsectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    textAlign: 'justify',
    marginBottom: '20px',
  },
};

export default DocumentacionComparacion;

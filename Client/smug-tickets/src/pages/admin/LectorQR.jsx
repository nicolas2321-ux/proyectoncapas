import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

const LectorQR = () => {
  const delay = 500;

  const previewStyle = {
    height: "50vh", // Ajusta la altura del lector al 50% del viewport height
    width: "100%",  // Ancho del lector al 100%
    marginBottom: "20px" // Margen inferior
  };

  const containerStyle = "flex flex-col items-center justify-center h-screen px-4";

  const resultadoStyle = "mt-8 p-4 border border-gray-300 text-center";

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result && result.data) {
      setResult(result.data);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div className={containerStyle}>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Escanea tu ticket</p>
      <div className="relative w-full">
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment"
        />
        {result && (
          <div className={resultadoStyle}>
            <p className="text-md md:text-lg lg:text-xl font-bold">Contenido del QR:</p>
            <p className="text-sm md:text-base lg:text-lg">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectorQR;


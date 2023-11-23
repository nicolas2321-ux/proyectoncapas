import { useState } from "react";
import { useZxing } from "react-zxing";
import NavbarQR from "../../components/Navbar/NavbarQR";

const LectorQR = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const videoContainerStyle = {
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
  };

  const previewStyle = {
    height: "50vh",
    width: "100%",
  };

  const ticketContainerStyle = {
    marginTop: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <>
      <NavbarQR />
      <div style={containerStyle}>
        <p style={titleStyle}>Escanea tu ticket</p>
        <div style={videoContainerStyle}>
          <video style={previewStyle} ref={ref} />
          {result && (
            <div style={ticketContainerStyle}>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>Ticket:</p>
              <p style={{ fontSize: "14px" }}>{result}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LectorQR;


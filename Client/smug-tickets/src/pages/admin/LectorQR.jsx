import { useState } from "react";
import { useZxing } from "react-zxing";
import Navbar from "../../components/Navbar/NavbarHomepage";

const LectorQR = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  const previewStyle = {
    height: "50vh",
    width: "100%",
    marginBottom: "20px",
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Escanea tu ticket
        </p>
        <div className="w-full">
          <video style={previewStyle} ref={ref} />
          {result && (
            <div className="mt-8 p-4 border border-gray-300 rounded-md text-center">
              <p className="text-md md:text-lg lg:text-xl font-bold">
                Ticket:
              </p>
              <p className="text-sm md:text-base lg:text-lg break-all">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LectorQR;

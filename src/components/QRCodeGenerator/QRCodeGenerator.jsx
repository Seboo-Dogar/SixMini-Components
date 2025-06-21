import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function generateQRCode() {
    setQRCode(input);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          QR Code Generator
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            name="qrcode"
            placeholder="Type to convert into QR Code"
            className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={generateQRCode}
            disabled={!input.trim()}
            className={`px-4 py-2 rounded-md text-white font-semibold ${
              input.trim()
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            } transition duration-200`}
          >
            Generate
          </button>
        </div>
        {qrCode && (
          <div className="flex justify-center mt-4">
            <QRCode
              size={256}
              id="QR-Code"
              value={qrCode}
              viewBox={`0 0 256 256`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QRCodeGenerator;

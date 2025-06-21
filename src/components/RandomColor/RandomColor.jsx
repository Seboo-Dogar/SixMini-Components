import React, { useEffect, useState } from "react";

const ColorGenerator = () => {
    const getRandomHexColor = () => {
         const letters = "0123456789ABCDEF";
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += letters[Math.floor(Math.random() * 16)];
        }
        return hex;
    };

    const getRandomRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const [color, setColor] = useState(getRandomHexColor());
    const [typeOfColor, setTypeOfColor] = useState("hex");

    const generateColor = () => {
        if (typeOfColor === "hex") {
        setColor(getRandomHexColor());
        } else {
        setColor(getRandomRgbColor());
        }
    };

    useEffect(() =>{
      const newColor = typeOfColor === 'rgb' ? getRandomRgbColor() : getRandomHexColor();
      setColor(newColor);
    },[typeOfColor])

return (
    <div
      className="h-screen flex flex-col items-center justify-center gap-6 text-white transition-colors duration-500"
      style={{ background: color }}
    >
      <div className="space-x-4">
            <button onClick={() => setTypeOfColor("hex")}
            className={`px-4 py-2 rounded font-semibold ${
                typeOfColor === "hex" ? "bg-white text-black" : "bg-transparent border border-white"}`}>
            Create HEX Color
            </button>
            <button
            onClick={() => setTypeOfColor("rgb")}
            className={`px-4 py-2 rounded font-semibold ${typeOfColor === "rgb" ? "bg-white text-black" : "bg-transparent border border-white"}`}>
            Create RGB Color
            </button>
      </div>

      <button onClick={generateColor}
        className="px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition">
        Generate Random Color
      </button>

      <div className="text-center">
        <h3 className="text-xl font-medium">
          Type: {typeOfColor.toUpperCase()}
        </h3>
        <h1 className="text-3xl font-bold">{color}</h1>
      </div>
    </div>
  );
};

export default ColorGenerator;

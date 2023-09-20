import { useState } from "react";

export default function Passgen() {
  const [len, setLen] = useState(8);
  return (
    <div className="main">
      <div className="inpandbtn">
        <h2 style={{ color: "white", marginRight: "10px" }}>
          Password Generator
        </h2>
        <input type="text" style={{ width: "300px" }} />
        <button style={{ marginLeft: "15px" }}>copy</button>
      </div>
      <div className="inputs">
        <label>length: {len}</label>
        <input type="range" min={6} max={100} />
        <label>Numbers:</label>
        <input type="checkbox" />
        <label>Chars:</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

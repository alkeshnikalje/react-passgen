import { useCallback, useEffect, useState, useRef } from "react";

export default function Passgen() {
  const [len, setLen] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [len, allowChar, allowNumber]);

  useEffect(() => {
    passGen();
  }, [len, allowChar, allowNumber]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="main">
      <div className="inpandbtn">
        <h2 style={{ color: "white", marginRight: "10px" }}>
          Password Generator
        </h2>
        <input
          type="text"
          style={{ width: "300px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          readOnly
          ref={passwordRef}
        />
        <button
          style={{ marginLeft: "15px" }}
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>
      <div className="inputs">
        <label>length: {len}</label>
        <input
          type="range"
          min={6}
          max={100}
          onChange={(e) => setLen(Number(e.target.value))}
        />
        <label>Numbers:</label>
        <input
          type="checkbox"
          checked={allowNumber}
          onChange={() => setAllowNumber((allow) => !allow)}
        />
        <label>Chars:</label>
        <input
          type="checkbox"
          checked={allowChar}
          onChange={() => setAllowChar((allow) => !allow)}
        />
      </div>
    </div>
  );
}

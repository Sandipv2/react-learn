import { useCallback } from "react";
import { useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const btnRef = useRef();

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isNumber) str += "!@#$&_";

    for (let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random() * str.length);
      pass += str[charIdx];
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isChar]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    btnRef.current.select();
  };

  return (
    <>
      <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-center text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={btnRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              checked={isNumber}
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              checked={isChar}
              onChange={() => {
                setIsChar((prev) => !prev);
              }}
            />
            <label>Symbol</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

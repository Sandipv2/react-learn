import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default App;

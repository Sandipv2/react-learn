import { useState } from "react";
import Navbar from "./components/Navbar";
import { CountContext, CountProvider } from "./contexts/countContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <countContext.Provider value={{count, setCount}}> */}
      <CountProvider value={{count, setCount}}>
        {count}
        <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
        <Navbar />
      </CountProvider>
      {/* </countContext.Provider> */}
    </>
  );
}

export default App;

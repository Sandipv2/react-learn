import { useState } from "react";

function App() {
  const [color, setCcolor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed bottom-12 inset-x-0 px-0 text-white flex flex-wrap justify-center">
          <div className="bg-whitse flex flex-wrap justify-center gap-3 bg-white p-2 rounded-3xl">
            <button
              className="bg-violet-600 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("violet")}
            >
              Violet
            </button>
            <button
              className="bg-indigo-600 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("indigo")}
            >
              Indigo
            </button>
            <button
              className="bg-blue-700 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("blue")}
            >
              Blue
            </button>
            <button
              className="bg-green-600 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("green")}
            >
              Green
            </button>
            <button
              className="bg-yellow-600 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("yellow")}
            >
              Yellow
            </button>
            <button
              className="bg-orange-600 px-4 py-2 rounded-3xl"
              onClick={() => setCcolor("orange")}
            >
              Orange
            </button>
            <button
              className="bg-red-600 px-4 py-1 rounded-3xl"
              onClick={() => setCcolor("red")}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

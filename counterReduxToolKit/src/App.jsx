import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import PrivacyMsg from './components/PrivacyMsg'
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((state) => state.privacy);

  return (
    <div
      className="bg-secondary d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ minWidth: "40%" }}>
        <div className="card-body">
          <h1 className="text-center">Counter App</h1>
          <hr />
          {privacy ? <PrivacyMsg /> : <DisplayCounter />}
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;

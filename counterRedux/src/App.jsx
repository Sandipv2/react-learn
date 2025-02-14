import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import PrivacyMsg from "./components/PrivacyMsg";
import { useSelector } from "react-redux";

function App() {
  const isPrivacy = useSelector(store  => store.privacy)

  return (
    <div className="card" style={{width: "100%"}}>
      <div className="card-body">
        <h1>Counter</h1>
        {isPrivacy ? <DisplayCounter /> : <PrivacyMsg/>}
        <Controls />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import json from "./data.json";

function Comp({ data }) {
  const [isExpanded, setIsExpanded] = useState({})

  const handleToggleClick = (item) => {
    setIsExpanded(prev => ({...prev, [item.name]: !prev[item.name]}))
  }

  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id}>
          {item.isFolder && <span className="toggleIcon" onClick={() => handleToggleClick(item)}>{isExpanded[item.name] ? "➖" : "➕"}</span>}
          {item.name}
          {item.children && isExpanded[item.name] && <Comp data={item.children} />}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>File Explorer</h1>
      <Comp data={data} />
    </div>
  );
}

export default App;

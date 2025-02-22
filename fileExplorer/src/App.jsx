import { useState } from "react";
import json from "./data.json";

function Comp({ data, addFolder, deleteFileFolder }) {
  const [isExpanded, setIsExpanded] = useState({});

  const handleToggleClick = (item) => {
    setIsExpanded((prev) => ({ ...prev, [item.name]: !prev[item.name] }));
  };

  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id}>
          {item.isFolder && (
            <span
              className="toggleIcon"
              onClick={() => handleToggleClick(item)}
            >
              {isExpanded[item.name] ? "-" : "+"}
            </span>
          )}
          {item.name}
          {item?.isFolder && (
            <img
              className="icon"
              onClick={() => addFolder(item.id)}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
            />
          )}
          <img
            onClick={() => deleteFileFolder(item.id)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            className="icon"
            alt="delete-icon"
          />

          {/*Recursion below*/}
          {item.children && isExpanded[item.name] && (
            <Comp
              data={item.children}
              addFolder={addFolder}
              deleteFileFolder={deleteFileFolder}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [data, setData] = useState(json);

  const addFolder = (itemId) => {
    const name = prompt("Enter folder name: ");
    const upDateList = (list) => {
      return list.map((node) => {
        if (node.id === itemId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Date.now(), name: name, isFolder: true, children: [] },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: upDateList(node.children) }; // Recursion
        }

        return node;
      });
    };

    setData((prev) => upDateList(prev));
  };

  const deleteFileFolder = (itemId) => {
    const deleteNode = (list) => {
      return list
      .filter((node) => node.id != itemId)
      .map((node) => {
        if(node.children) {
          return {...node, children: deleteNode(node.children)}
        }

        return node;
      })
    }

    setData(prev => deleteNode(prev))
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <Comp
        data={data}
        addFolder={addFolder}
        deleteFileFolder={deleteFileFolder}
      />
    </div>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { useRef } from "react";

function Controls() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handlePlus = () => {
    dispatch({ type: "increment" });
  };

  const handleMinus = () => {
    dispatch({ type: "decrement" });
  };

  const handleAdd = () => {
    dispatch({
        type: 'ADD',
        payload: {
            num: Number(inputRef.current.value)
        }
    });
    inputRef.current.value = ""
};

const handleSub = () => {
    dispatch({
        type: 'SUB',
        payload: {
            num: Number(inputRef.current.value)
        }
    })
    inputRef.current.value = ""
  };

  const handlePrivacy = () => {
    dispatch({
        type: 'PRIVACY'
    })
  }

  return (
    <div className="">
      <div className="d-flex gap-2">
        <button onClick={handlePlus} className="btn btn-primary">
          +
        </button>
        <button onClick={handleMinus} className="btn btn-success">
          -
        </button>
        <button onClick={handlePrivacy} className="btn btn-secondary">Privay Toggle</button>
      </div>

      <div className="my-2 d-flex gap-2">
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd} className="btn btn-warning">
          Add
        </button>
        <button onClick={handleSub} className="btn btn-danger">
          Warning
        </button>
      </div>
    </div>
  );
}

export default Controls;

import { useRef } from "react";
import { increment, decrement, add, sub } from "../store/slice/counterSlice";
import { togglePrivacy } from "../store/slice/privacySlice";
import { useDispatch, useSelector } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const privacy = useSelector(state => state.privacy)

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddition = () => {
    dispatch(add(Number(inputRef.current.value)));
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(sub(Number(inputRef.current.value)));
    inputRef.current.value = "";
  };

  const handleToggle = () => {
    dispatch(togglePrivacy());
  };

  return (
    <div className="d-flex flex-column gap-2 mt-2">
      <div className="d-flex gap-2">
        <button onClick={handleIncrement} className="btn btn-danger">
          +
        </button>
        <button onClick={handleDecrement} className="btn btn-primary">
          -
        </button>

        <button onClick={handleToggle} className="btn btn-dark">
          {privacy ? "Privacy is on." : "Privacy is off."}
        </button>
      </div>
      <div className="d-flex gap-2">
        <input
          type="text"
          placeholder="Enter Number"
          className="form-control border-dark"
          ref={inputRef}
        />
        <button onClick={handleAddition} className="btn btn-success">
          Addition
        </button>
        <button onClick={handleSubtract} className="btn btn-warning">
          Subtract
        </button>
      </div>
    </div>
  );
}

export default Controls;

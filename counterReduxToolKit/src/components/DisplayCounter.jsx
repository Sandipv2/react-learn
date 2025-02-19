import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((state) => state.counter);
  return <div className="fs-5 fw-semibold">Counter value : {counterVal}</div>;
}

export default DisplayCounter;

import { useSelector } from "react-redux";

function DisplayCounter() {
  const count = useSelector(store => store.count);
  return <div className="fs-4">Counter is : {count}</div>;
}

export default DisplayCounter;

import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to]);
  };

  const reverse = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmmount);
    setConvertedAmmount(amount);
  };

  useEffect(() => {
    setConvertedAmmount(amount * currencyInfo[to]);
  }, [amount, from, to, currencyInfo]);

  return (
    <div className="w-full h-screen flex flex-col flex-wrap gap-5 justify-center items-center bg-black">
      <h1 className="text-white text-4xl">Currency Converter</h1>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30v flex flex-col gap-1">
        <InputBox
          label="From"
          amount={Number(amount).toFixed(2)}
          options={options}
          selectCurrency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
        />

        <div className="bg-slate-600 w-full flex justify-center relative">
          <button
            className="text-center bg-blue-500 absolute px-5 py-2 font-bold rounded-md -translate-y-4"
            onClick={reverse}
          >
            ↑↓
          </button>
        </div>

        <InputBox
          label="To"
          amount={Number(convertedAmmount).toFixed(2)}
          options={options}
          selectCurrency={to}
          onAmountChange={setConvertedAmmount}
          onCurrencyChange={setTo}
        />

        {/* <button
          className="bg-blue-600 p-2 rounded-md font-bold mt-2"
          onClick={convert}
        >
          Convert
        </button> */}
      </div>
    </div>
  );
}

export default App;

import { useId } from "react";

function InputBox({
  label,
  amount,
  options,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
}) {
  const inputId = useId();
  return (
    <div className="bg-white rounded-md p-3 flex justify-between align-center">
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-gray-500">
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          min={0}
          value={amount}
          className="outline-none bg-transparent font-bold"
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-500">Currency Type</label>
        <select
          className="bg-slate-200 px-1 font-bold rounded-md outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

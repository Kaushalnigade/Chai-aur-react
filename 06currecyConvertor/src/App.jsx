import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const objects = Object.keys(currencyInfo);

  // ✅ Swap Function
  const swap = () => {
    setfrom(to);
    setTo(from);
    setamount(convertedAmount);
    setConvertedAmount(amount);
  };

  // ✅ Convert Function
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    // ✅ Background Image Added Here
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg")`,
      }}
    >
      <div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* ✅ FROM Input */}
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={objects}
              onAmountChange={(amount) => setamount(amount)}
              onCurrencyChange={(currency) => setfrom(currency)}
              selectCurrency={from}
            />
          </div>
          
          <div className="w-full flex justify-center mb-4">
            <button
              type="button"
              className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={objects}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountdisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

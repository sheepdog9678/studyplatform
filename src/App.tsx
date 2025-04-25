import "./App.css";
import { useCounter } from "./store/useCounter";

function App() {
  const { count, increase, decrease, reset } = useCounter();
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Count: {count}</h1>
      <div className="flex justify-center gap-2">
        <button
          onClick={increase}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

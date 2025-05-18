import { useAppContext } from "../context/AppContext";

const AISelector = () => {
  const { selectedAI, setSelectedAI } = useAppContext();

  return (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Choose AI Engine
      </label>
      <select
        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        value={selectedAI}
        onChange={(e) => setSelectedAI(e.target.value)}
      >
        <option value="chatgpt">ChatGPT</option>
        <option value="claude">Claude</option>
        <option value="blackbox">Blackbox</option>
      </select>
    </div>
  );
};

export default AISelector;


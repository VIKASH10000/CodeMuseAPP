import { useAppContext } from "../context/AppContext";

const PromptInput = () => {
  const { prompt, setPrompt, fetchResponse } = useAppContext();

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm resize-none shadow bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        placeholder="Ask a question, paste code, or describe your issue..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
      />
      <button
        onClick={fetchResponse}
        className="mt-3 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
      >
        Ask AI
      </button>
    </div>
  );
};

export default PromptInput;


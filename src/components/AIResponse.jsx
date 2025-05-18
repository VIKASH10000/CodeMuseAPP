import { useAppContext } from "../context/AppContext";

const AIResponse = () => {
  const { response } = useAppContext();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-4 text-sm text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-wrap shadow transition-colors duration-300">
      {response || "Response will appear here..."}
    </div>
  );
};

export default AIResponse;


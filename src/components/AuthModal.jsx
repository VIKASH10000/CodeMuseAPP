import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { history, handleHistorySelect, user } = useAppContext();

  if (!user) return null; // Hide sidebar if user is not logged in

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r p-4 overflow-y-auto hidden lg:block transition-colors">
      <h2 className="text-lg font-semibold mb-4">Query History</h2>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {history.length === 0 && (
          <li className="text-gray-400">No history yet</li>
        )}
        {history.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => handleHistorySelect(item)}
          >
            {item.slice(0, 40)}...
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

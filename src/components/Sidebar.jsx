import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { history, handleHistorySelect, user } = useAppContext();

  if (!user) {
    // Hide sidebar if not logged in
    return null;
  }

  return (
    <aside className="w-64 bg-white border-r p-4 overflow-y-auto flex flex-col dark:bg-gray-800 dark:text-white">
      <h2 className="text-lg font-semibold mb-4">Query History</h2>
      <ul className="space-y-2 text-sm">
        {history.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400">No history yet.</li>
        ) : (
          history.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => handleHistorySelect(item)}
            >
              {item.length > 40 ? item.slice(0, 40) + "..." : item}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;

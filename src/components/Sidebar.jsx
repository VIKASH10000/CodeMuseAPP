// Updated Sidebar.jsx
import { useAppContext } from "../context/AppContext";

const Sidebar = ({ onClose }) => {
  const { history, handleHistorySelect, user } = useAppContext();
  const isMobile = window.innerWidth <= 768;

  if (!user) return null;

  return (
    <aside className={`${
      isMobile ? 'fixed inset-0 z-40 bg-white dark:bg-gray-800 overflow-y-auto' : 'w-64 border-r'
    } bg-white p-4 overflow-y-auto flex flex-col dark:bg-gray-800 dark:text-white`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Query History</h2>
        {isMobile && (
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <ul className="space-y-2 text-sm flex-1 overflow-y-auto">
        {history.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400">No history yet.</li>
        ) : (
          history.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                handleHistorySelect(item);
                if (isMobile) onClose();
              }}
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
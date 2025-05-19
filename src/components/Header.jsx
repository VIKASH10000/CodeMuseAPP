import ThemeToggler from "./ThemeToggler";

const Header = ({ onLogout, isGuest }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-4 shadow-md flex justify-between items-center">
      {/* Left side: Title and subtitle */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">CodeMuse</h1>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Your AI Developer Companion
        </span>
      </div>

      {/* Right side: Theme toggler + Logout/Login button */}
      <div className="flex items-center gap-4">
        <ThemeToggler />
        <button
          onClick={onLogout}
          className={`${
            isGuest 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "bg-red-600 hover:bg-red-700"
          } text-white px-3 py-1 rounded transition`}
        >
          {isGuest ? "Login" : "Logout"}
        </button>
      </div>
    </header>
  );
};

export default Header;
import { useAppContext } from "../context/AppContext";

const AuthButtons = () => {
  const { user, logout, setAuthModalOpen } = useAppContext();

  return (
    <div className="absolute top-4 right-4 space-x-2 z-50">
      {user ? (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setAuthModalOpen(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Login / Signup
        </button>
      )}
    </div>
  );
};

export default AuthButtons;

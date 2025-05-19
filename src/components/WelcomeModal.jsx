const WelcomeModal = ({ onLogin, onSignup, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to CodeMuse</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Please login or sign up to save your query history and access all features. Or continue as guest.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded"
          >
            Sign up
          </button>
          <button
            onClick={onContinue}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

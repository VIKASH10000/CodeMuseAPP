import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AISelector from "./components/AISelector";
import PromptInput from "./components/PromptInput";
import AIResponse from "./components/AIResponse";
import Loader from "./components/Loader";
import { useAppContext } from "./context/AppContext";
import { AppProvider } from "./context/AppContext";
import Login from "./components/Login";
import Signup from "./components/signup";
import WelcomeModal from "./components/WelcomeModal";

// Main App UI when logged in or guest
const App = ({ onLogout }) => {
  const { loading } = useAppContext();

  return (
    <div className="md:flex-row min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col transition-colors duration-300">
      <Header onLogout={onLogout} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 max-w-4xl mx-auto">
          <AISelector />
          <PromptInput />
          {loading ? <Loader /> : <AIResponse />}
        </main>
      </div>
    </div>
  );
};

// Root component manages login state & modal
const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("codemuse_user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("codemuse_user","vv2644665@gmail.com"); // demo user email placeholder
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowSignup(false);
    setShowModal(false);
  };

  const handleContinueAsGuest = () => {
    setIsGuest(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("codemuse_user");
    
    setIsLoggedIn(false);
    setIsGuest(false);
    setShowModal(true);
  };

  return (
    <AppProvider>
      {/* Welcome modal if no user and not guest and no login/signup shown */}
      {showModal && !isLoggedIn && !isGuest && !showLogin && !showSignup && (
        <WelcomeModal
          onLogin={() => {
            setShowLogin(true);
            setShowModal(false);
          }}
          onSignup={() => {
            setShowSignup(true);
            setShowModal(false);
          }}
          onContinue={handleContinueAsGuest}
        />
      )}

      {showLogin && (
        <Login
          onLogin={handleLogin}
          switchToSignup={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onSignup={handleLogin}
          switchToLogin={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
        />
      )}

      {(isLoggedIn || isGuest) && <App onLogout={handleLogout} />}
    </AppProvider>
  );
};

export default Root;

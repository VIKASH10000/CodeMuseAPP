import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AISelector from "./components/AISelector";
import PromptInput from "./components/PromptInput";
import AIResponse from "./components/AIResponse";
import Loader from "./components/Loader";
import { useAppContext, AppProvider } from "./context/AppContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WelcomeModal from "./components/WelcomeModal";

// Main App UI when logged in or guest
const App = ({ onLogout }) => {
  const { loading } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col transition-colors duration-300">
      {/* Header full width */}
      <Header onLogout={onLogout} />

      {/* Main body: sidebar left, content right */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar /> {/* fixed width sidebar */}

        <main className="flex-1 p-6 max-w-4xl mx-auto overflow-y-auto">
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
  const { user, login, logout } = useAppContext();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(false);
      setShowLogin(false);
      setShowSignup(false);
      setIsGuest(false);
    }
  }, [user]);

  const handleLogin = (username = "demoUser") => {
    login(username);
    setShowLogin(false);
    setShowSignup(false);
    setShowModal(false);
    setIsGuest(false);
  };

  const handleContinueAsGuest = () => {
    setIsGuest(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    logout();
    setIsGuest(false);
    setShowModal(true);
  };

  return (
    <>
      {showModal && !user && !isGuest && !showLogin && !showSignup && (
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

      {(user || isGuest) && <App onLogout={handleLogout} />}
    </>
  );
};

export default function Main() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}

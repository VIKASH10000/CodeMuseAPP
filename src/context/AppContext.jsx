import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [selectedAI, setSelectedAI] = useState("chatgpt");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Load user and history from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("codemuse_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));

      // Load history for user if saved
      const storedHistory = localStorage.getItem("codemuse_history");
      if (storedHistory) setHistory(JSON.parse(storedHistory));
    } else {
      setAuthModalOpen(true);
    }
  }, []);

  // Save history to localStorage whenever it changes and user exists
  useEffect(() => {
    if (user) {
      localStorage.setItem("codemuse_history", JSON.stringify(history));
    }
  }, [history, user]);

  const login = (username) => {
    const userObj = { username };
    localStorage.setItem("codemuse_user", JSON.stringify(userObj));
    setUser(userObj);
    setAuthModalOpen(false);

    // Optionally, load history here again or clear it for fresh start
    const storedHistory = localStorage.getItem("codemuse_history");
    if (storedHistory) setHistory(JSON.parse(storedHistory));
  };

  const logout = () => {
    localStorage.removeItem("codemuse_user");
    localStorage.removeItem("codemuse_history");
    setUser(null);
    setHistory([]);
    setAuthModalOpen(true);
  };

  const fetchResponse = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    // Add prompt to history only if user is logged in
    if (user) {
      setHistory((prev) => [prompt, ...prev]);
    }

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const aiReply = res.data.choices[0].message.content.trim();
      setResponse(aiReply);
    } catch (err) {
      setResponse("❌ Failed to fetch response. Check your API key or network.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleHistorySelect = (item) => {
    setPrompt(item);
    setResponse("");
  };

  return (
    <AppContext.Provider
      value={{
        prompt,
        setPrompt,
        response,
        selectedAI,
        setSelectedAI,
        loading,
        fetchResponse,
        history,
        handleHistorySelect,
        user,
        login,
        logout,
        authModalOpen,
        setAuthModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

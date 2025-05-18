import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./app"; // ✅ Correct import based on `export default Root` in app.jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

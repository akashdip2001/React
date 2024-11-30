import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // 1.1 Import the App component from the App.jsx file

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>Hello World</div>
    <App /> {/* // 1.1 Render the App component as a jsx element */}
  </React.StrictMode>
);

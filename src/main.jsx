import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import SocketProvider from "./context/socketProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <Toaster />
    <App />
  </SocketProvider>
);

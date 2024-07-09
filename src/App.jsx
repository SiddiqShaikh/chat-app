import { RouterProvider } from "react-router-dom";
import "../src/App.css";
import "../src/index.css";
import router from "./routes/Router";


function App() {

  return (
   
    <RouterProvider router={router} />
  );
}

export default App;



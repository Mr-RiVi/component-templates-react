/*
  Pre requirements for Material UI components
    -yarn add @mui/material @emotion/react @emotion/styled
*/

import { BrowserRouter } from "react-router-dom";

import IndexRoutes from "./routes/IndexRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

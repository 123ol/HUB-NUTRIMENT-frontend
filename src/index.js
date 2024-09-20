import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from "./components/context/ContextProvider";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
  </ContextProvider>
);

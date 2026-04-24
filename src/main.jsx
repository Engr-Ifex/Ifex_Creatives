import React from 'react'
import ReactDOM  from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./styles/globals.css";
import router from "./router"
import { ThemeProvider } from "./context/ThemeContext";
import { LoaderProvider } from "./context/LoaderContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoaderProvider>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
    </LoaderProvider>
  </React.StrictMode>,
)

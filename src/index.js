import './index.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import 'react-toastify/dist/ReactToastify.css';

import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import ReactDOM from 'react-dom/client';

//import toast,{toaster} from "react-hot-toast";



const ErrorFallBack=({error,resetErrorBoundary})=>{
  return(
    <div>
      <p>Have Error</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={()=>{alert("salam")}}>
  <App />
  </ErrorBoundary>
  </BrowserRouter>
  </React.StrictMode>
);
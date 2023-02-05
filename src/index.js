import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FusionAuthProvider } from 'fusionauth-react-sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FusionAuthProvider
    baseUrl="http://localhost:9011/"
    clientID="e9bd45db-ccd9-4668-b1fe-c2629d5327c2"
    serverUrl="http://localhost:3001"
    redirectUri="http://localhost:3000/">
      <App />
    </FusionAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

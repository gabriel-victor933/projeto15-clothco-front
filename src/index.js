import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './style/ResetStyle';
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);



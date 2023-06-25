import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import i18next, { init } from 'i18next';
import { lang } from './lang/lang';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
   resources: lang,
   lng: JSON.parse(localStorage.getItem('lang')) || 'ru'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <AuthContextProvider>
   <App/>
   </AuthContextProvider>
   </BrowserRouter>
);


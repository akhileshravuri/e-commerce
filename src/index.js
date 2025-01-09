import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navvbar from '../src/components/navbar'
import { Cartprovider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>

   <Cartprovider>
   <App />
   </Cartprovider>
  
  </React.StrictMode>
  </BrowserRouter>
 
);


reportWebVitals();

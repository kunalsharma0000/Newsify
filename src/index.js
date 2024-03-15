import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
import App from './App';
import Navbar from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
// import { createBrowserRouter } from 'react-router-dom';
// import News from './Component/Pages/News/News';
// import Parent from './Component/Home/Parent';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Parent/>
//   },
//   {
//     path:'news/',
//     element:<News/>
//   },
 
// ])
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

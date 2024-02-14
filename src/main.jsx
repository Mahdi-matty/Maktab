import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SubjectPage from './pages/SubjectPage.jsx'
import SubjectPart from './pages/SubjectPart.jsx'
import Login from './pages/login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/subjects',
        element: <SubjectPage />,
      },
      {
        path: '/subjects/:id',
        element: <SubjectPart />,
      },             
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
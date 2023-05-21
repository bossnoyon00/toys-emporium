import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AddToys from './components/AddToys/AddToys.jsx';
import SingleToyDetails from './components/SingleToyDetails/SingleToyDetails.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import UpdatedToys from './components/UpdatedToys/UpdatedToys.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/singleToys/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/updatedToys/:id',
        element: <PrivateRoute><UpdatedToys></UpdatedToys></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/post-toys/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)


import './App.css';
import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './pages/Error';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/single',
        element: <Single />

      },
      {
        path: '/write',
        element: <Write />

      }
    ]

  },

  {
    path: '/register',
    element: <Register />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '*',
    element: <Error />
  },
])

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}



export default App;

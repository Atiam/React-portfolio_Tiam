
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import App from './App';
// import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contacts';
import About from './pages/About';
import Resume from './pages/Resume';
// import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      // {
      //   path: '/Blog',
      //   element: <Blog />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
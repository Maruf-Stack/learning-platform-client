
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './component/layout/Main';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Regi from './component/registration/Regi';
import Courses from './component/courses/Courses';
import Details from './component/detailspage/Details';
import Sidebar from './component/sidebar/Sidebar';
import Blog from './component/blog/Blog';
import Error from './component/error page/Error';
import Checkout from './component/checkout/Checkout';
import Private from './component/privateRoute/Private';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/regi',
          element: <Regi></Regi>
        },
        {
          path: '/courses/',
          loader: () => fetch('http://localhost:5000/courses/'),
          element: <Courses></Courses>

        }, {
          path: '/details/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
          element: <Details></Details>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }, {
          path: '/checkout/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
          element: <Private><Checkout></Checkout></Private>
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

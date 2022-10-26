
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
import Faq from './component/faq/Faq';


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
          loader: () => fetch('https://it-course-server.vercel.app/courses/'),
          element: <Courses></Courses>

        }, {
          path: '/details/:id',
          loader: ({ params }) => fetch(`https://it-course-server.vercel.app/courses/${params.id}`),
          element: <Details></Details>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }, {
          path: '/checkout/:id',
          loader: ({ params }) => fetch(`https://it-course-server.vercel.app/courses/${params.id}`),
          element: <Private><Checkout></Checkout></Private>
        }, {
          path: '/faq',
          element: <Faq></Faq>
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

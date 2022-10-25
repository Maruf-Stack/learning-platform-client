
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './component/layout/Main';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Regi from './component/registration/Regi';
import Courses from './component/courses/Courses';
import Details from './component/detailspage/Details';
import Sidebar from './component/sidebar/Sidebar';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
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

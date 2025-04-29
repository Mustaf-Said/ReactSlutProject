import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ContextPrivider from './pages/ContextPrivider';
import FetchData from './pages/FetchData';
import MyBook from './links/MyBook';
import MyFavorite from './links/MyFavorite';


function App() {

  const MyRouter = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        {
          index: true, element: <Home />,
        },
        { path: "myBook", element: <MyBook /> },
        { path: "myFavorite", element: <MyFavorite /> },
        { path: "FetchData ", element: <FetchData /> }


      ]
    }
  ]);

  return (
    <ContextPrivider>
      <RouterProvider router={MyRouter}></RouterProvider>
    </ContextPrivider>
  );
}

export default App;

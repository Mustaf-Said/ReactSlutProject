import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ContextPrivider from './pages/ContextPrivider';
import FetchData from './pages/FetchData';
import Browse from './links/Browse';
import MyBooks from './links/MyBooks';

function App() {

  const MyRouter = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        {
          index: true, element: <Home />,
        },
        { path: "browse", element: <Browse /> },
        { path: "myBooks", element: <MyBooks /> },
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

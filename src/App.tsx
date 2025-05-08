import './styles/App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home';
import ContextPrivider from './context/ContextPrivider';
import FetchData from './components/FetchData';
import MyBook from './navbar/MyBook';
import MyFavorite from './navbar/MyFavorite';
import Footer from './components/Footer';


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
        { path: "FetchData ", element: <FetchData /> },
        { path: "footer ", element: <Footer /> }


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

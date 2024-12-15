
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './homePage.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Main from './component/main.jsx';
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import AppartementPage from './appartementPage.jsx';
import ErrorPage from './errorPage.jsx';

const HeaderFooterLayout = () => {
  return <>
    <Main>
      <Navbar />
      <Outlet />
    </Main>
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage/>,
    children: [{
      path: '/',
      element: <HomePage />
    },
    {
      path: '/appartement',
      element: <AppartementPage />
    }, {
      path: '/about',
      element: <h1>A propos</h1 >
    }
    ]
  },
]);

// Rendu de l'application avec RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

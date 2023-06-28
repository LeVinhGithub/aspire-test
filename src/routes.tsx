import { createBrowserRouter, Navigate } from 'react-router-dom';
import authenticationSession from '@utils/authenticationSession';
import Page404 from '@components/pages/Page404';
import Page500 from '@components/pages/Page500';
import Home from '@components/pages/Home';

const ProtectedRoute = ({ children }) => {
  const authenticated = authenticationSession.getAuthenticatedStatus();

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: '/404',
    element: Page404,
  },

  {
    path: '/500',
    element: Page500,
  },

  {
    path: '/index',
    element: Home,
  },
]);

export default router;

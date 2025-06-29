import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PagePaths } from '@/constants';
import SharedLayout from '@/components/SharedLayout';
import PublicRoute from '@/components/PublicRoute';
import Loader from '@/components/Loader';
import { useRefreshUser } from '@/hooks';

const SignInPage = lazy(() => import('@/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const ChatsPage = lazy(() => import('@/pages/ChatsPage'));
const ChatDetailsPage = lazy(() => import('@/pages/ChatDetailsPage'));
const PrivateRoute = lazy(() => import('@/components/PrivateRoute'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const isRefreshing = useRefreshUser();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signIn}
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signUp}
          element={<PublicRoute restricted element={<SignUpPage />} />}
        />
        <Route
          path={PagePaths.chats}
          element={<PrivateRoute element={<ChatsPage />} />}
        >
          <Route
            path={`${PagePaths.chats}/:${PagePaths.dynamicParam}`}
            element={<PrivateRoute element={<ChatDetailsPage />} />}
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

import {Outlet} from 'react-router';
import Navigation from './Navigation';
import {useEffect} from 'react';
import {useUserContext} from '../hooks/contextHooks';

const Layout = () => {
  const {handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;

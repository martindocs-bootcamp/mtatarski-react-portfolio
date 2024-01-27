import {Outlet} from 'react-router-dom';
import Navigation  from './Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Outlet />    
      </div>
    </>
  )
}

export default SharedLayout
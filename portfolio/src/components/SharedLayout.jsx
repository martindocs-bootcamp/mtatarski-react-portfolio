import {Outlet} from 'react-router-dom';
import Navigation  from './Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <div className="container-fluid">
        <Outlet />    
      </div>
    </>
  )
}

export default SharedLayout
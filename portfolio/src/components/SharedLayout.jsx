import {Outlet} from 'react-router-dom';
import Navigation  from './Navigation';

const SharedLayout = () => {

  // Render a shared layout with navigation and content outlet
  return (
    <>
      <Navigation />
      <div className="container">

        {/* Content outlet for rendering routes */}
        <Outlet />    
      </div>
    </>
  )
}

export default SharedLayout;
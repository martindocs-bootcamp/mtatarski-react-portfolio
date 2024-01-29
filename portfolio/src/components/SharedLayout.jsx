import {Outlet} from 'react-router-dom';
import Navigation  from './Navigation';
import Footer from './Footer';

const SharedLayout = () => {

  // Render a shared layout with navigation and content outlet
  return (
    <>
      <Navigation />
      <div className="container">

        {/* Content outlet for rendering routes */}
        <Outlet />            
      </div>
      <Footer />
    </>
  )
}

export default SharedLayout;
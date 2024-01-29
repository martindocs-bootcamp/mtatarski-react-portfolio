import getImagePath from '../utils/getImagePath';

const Logo = () => {  
   
  // Render the logo image
  return (    
    <img src={getImagePath('logo.png')} alt="Website M and T logo" className='logo' />
  )
}

export default Logo;
import { Link } from 'react-router-dom';
import errorImg from '../assets/svg/error404.svg';

// ErrorPage component to be displayed for 404 error
const ErrorPage = () => {

  // Render the error page content
  return (
    <div className="row">
      <div className="col col-md-6 mx-auto error">            
        <h2 className='error-header'>Oops... Page Not Found</h2>
        <img src={errorImg} alt="error 404 message" className='error-img' />
        <p>We can&apos;t seem to find the page you&apos;re looking for</p>

        {/* Link to navigate back to the home page */}
        <Link to="/" className='error-home'>back home</Link>     
      </div>
    </div>
  )
}

export default ErrorPage;
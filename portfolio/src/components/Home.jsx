import profileImg from '../../public/assets/images/me.png';

const Home = () => {
  return (
    <div className="card about">
      <div className="row">      
        <div className="col">
          <img 
            src={profileImg} 
            className="card-img-top about-img" 
            alt="Photo of Marcin Tatarski on a white background" 
          />
        </div>
        <div className="col">
          <div className="card-header about-header">Marcin Tatarski</div>
          <div className="card-body about-content">
            <h3 className='about-statement'>Some text</h3>
            <div className='about-location'>
              <i className="fa-solid fa-location-dot"></i> 
              <p>Worcester, UK</p>
            </div>
            <div className='about-email'>
              <i className="fa-regular fa-envelope"></i> 
              <a href="mailo:martin.tatarski@gmail.com">martin.tatarski@gmail.com</a>
            </div>
            <div className='about-resume'>
              <i className="fa-regular fa-file"></i>
              <a href="#">Resume</a>              
            </div>           
            <ul className='about-skills'>
              <li className='about-skill'>React</li>
              <li className='about-skill'>Node.js</li>
              <li className='about-skill'>Boostrali</li>
              <li className='about-skill'>Exliress.js</li>
              <li className='about-skill'>MongoDB</li>
              <li className='about-skill'>CSS3</li>              
            </ul>
            <div className='about-btn'>
              <button className='btn about-btn-github'><i className="fa-brands fa-github"></i></button>
              <button className='btn about-btn-linkedin'><i className="fa-brands fa-linkedin"></i></button>
            </div>
          </div>          
        </div>
      </div>
      <div className="row about-me">
        <div className="col">
            <p className='about-me-txt'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ducimus voluptate expedita dolorum asperiores odit impedit perspiciatis mollitia repellat molestias.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
import profileImg from '../assets/images/me.png';
import resume from '../assets/docs/Marcin-Tatarski-CV.pdf';

const Home = () => {

  const openPdfInNewTab = () => {
    window.open(resume, '_blank');
  }

  return (
    <div className="card home">
      <div className="row">      
        <div className="col col-md-4 d-flex justify-content-center align-items-center">
          <img 
            src={profileImg} 
            className="card-img-top home-img" 
            alt="Photo of Marcin Tatarski on a white background" 
          />
        </div>
        <div className="col col-md-8">
          <div className="card-header home-header">Hi, I&apos;m Marcin</div>
          <div className="card-body home-content">
            <h3 className='home-tagline'>Front-End Web Developer</h3>            
            <div className='home-location d-flex align-items-baseline'>
              <i className="fa-solid fa-location-dot home-icon"></i> 
              <div>Worcester, UK</div>
            </div>
            <div className='home-email d-flex align-items-baseline'>
              <i className="fa-regular fa-envelope home-icon"></i> 
              <a href="mailto:martin.tatarski@gmail.com">martin.tatarski@gmail.com</a>
            </div>
            <div className='home-resume d-flex align-items-baseline'>
              <i className="fa-regular fa-file home-icon"></i>
              <button onClick={openPdfInNewTab}>Resume</button>              
            </div>           
            <ul className='home-skills'>
              <li className='home-skill'>React</li>
              <li className='home-skill'>Node.js</li>
              <li className='home-skill'>Boostrap</li>
              <li className='home-skill'>Express.js</li>
              <li className='home-skill'>MongoDB</li>
              <li className='home-skill'>CSS3</li>              
            </ul>
            <div className='home-btn'>             
              <a 
                type="button"
                className='btn home-btn-github' 
                title="GitHub"
                href="https://github.com/martindocs"
                target='_blank'
                rel="noopener noreferrer"
              ><i className="fa-brands fa-github"></i></a>
              <a 
                type="button"
                className='btn home-btn-linkedin' 
                title="Linkedin"
                href="https://www.linkedin.com/in/marcin-tatarski/"
                target='_blank'
                rel="noopener noreferrer"
              ><i className="fa-brands fa-linkedin"></i></a>
              <a 
                type="button"
                className='btn home-btn-twitter' 
                title="Twitter"
                href="https://twitter.com/MartinTatarski"
                target='_blank'
                rel="noopener noreferrer"
              ><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>          
        </div>
      </div>
      <div className="row home-me">
        <div className="col">
            <p className='home-me-text'>
            I&apos;m a passionate Frontend Web Developer.              
            </p>
            <p className='home-me-text'>
            I have extensive experience in developing user-friendly websites and applications using the latest web technologies, such as the MERN stack. I&apos;ve honed my skills in front-end development, back-end development, and database management. I&apos;m also well-versed in Agile methodologies and always strive to deliver projects on time and within budget. When I&apos;m not coding, I enjoy exploring new technologies and pushing myself to learn more. I&apos;m excited about the opportunity to leverage my skills to develop innovative solutions. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
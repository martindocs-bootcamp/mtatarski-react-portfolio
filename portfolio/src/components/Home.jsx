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
          <div className="card-header home-header">Marcin Tatarski</div>
          <div className="card-body home-content">
            <h3 className='home-tagline'>Designing Experiences, Not Just Interfaces.</h3>            
            <div className='home-location d-flex align-items-baseline'>
              <i className="fa-solid fa-location-dot home-icon"></i> 
              <div>Worcester, UK</div>
            </div>
            <div className='home-email d-flex align-items-baseline'>
              <i className="fa-regular fa-envelope home-icon"></i> 
              <a href="mailo:martin.tatarski@gmail.com">martin.tatarski@gmail.com</a>
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
              <button className='btn home-btn-github' title="GitHub"><i className="fa-brands fa-github"></i></button>
              <button className='btn home-btn-linkedin' title="Linkedin"><i className="fa-brands fa-linkedin"></i></button>
            </div>
          </div>          
        </div>
      </div>
      <div className="row home-me">
        <div className="col">
            <p className='home-me-text'>
            Hi there, I&apos;m Marcin, a passionate self-taught web developer.              
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
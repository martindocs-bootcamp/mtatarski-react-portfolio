import { useLocation } from 'react-router-dom';
import getImagePath from '../utils/getImagePath'; 

const ProjectDetail = () => {
  const project = useLocation().state.project;
  
  const{id, img_path, title, description, tools, url} = project;
  const image = getImagePath(img_path);

  return (    
    <div className="row">
      <div className="col col-md-9 col-lg-7 mx-auto">

      <div className="card project mx-auto">   
      <div className="card-header project-title">{`Project ${id} - ${title}`}</div>  
      <img src={image} className="card-img-top project-img" alt={title} />
      <div className="card-body project-main">
        <h3 className="card-title project-desc">Description</h3>
        <p className="card-text project-text">{description}</p>
        <h4 className="card-title project-desc">Technologies</h4>
        <ul className='project-tools'>      
          {
            tools.map((tool, index)=> {
              return(
              <li 
                key={index}
                className='project-tool'
              >{tool}</li>)
            })
          }
        </ul>
        <div className="card-footer project-footer">
          {
            url.map(({icon, label, url}, index) => {
                           
              return (
                <a 
                  key={index}
                  href={url} 
                  className="btn project-btn" 
                  target='_blank'
                  rel="noopener noreferrer"
                ><i className={`${icon} project-icon`}></i>{label}</a>
              )
            })
          }         
        </div>
      </div>
    </div>


      </div>
    
    </div>
    
  )
}

export default ProjectDetail;
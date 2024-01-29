import { useLocation } from 'react-router-dom';
import getImagePath from '../utils/getImagePath'; 

const ProjectDetail = () => {
  // Get the project details from the location state
  const project = useLocation().state.project;
  
  const{id, img_path, title, description, tools, url} = project;

  // Get the full image path 
  const image = getImagePath(img_path);

  return (    
    <div className="row">
      <div className="col col-md-9 col-lg-7 mx-auto">
        <div className="card project mx-auto">   

          {/* Project title */}
          <div className="card-header project-title">{`Project ${id} - ${title}`}</div>  

           {/* Project image */}
          <img src={image} className="card-img-top project-img" alt={title} />

          <div className="card-body project-main">
            {/* Project description */}
            <h3 className="card-title project-desc">Description</h3>
            <p className="card-text project-text">{description}</p>

            {/* Project technologies/tools */}
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

            {/* Project links to Github code, youtube video or documentation */}
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
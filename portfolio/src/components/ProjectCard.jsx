import {PropTypes} from 'prop-types';

const ProjectCard = ({
  image, 
  title, 
  description, 
  tools,
  url,
}) => {
  
  return (
    <div className="card project">     
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
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
        <div className="card-footer">
          {
            url.map(({label, url}, index) => {
                           
              return (
                <a 
                  key={index}
                  href={url} 
                  className="btn btn-primary card-btn-live" 
                  target='_blank'
                  rel="noopener noreferrer"
                >{label}</a>
              )
            })
          }         
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  tools: PropTypes.array.isRequired,
  url: PropTypes.array.isRequired,   
}

export default ProjectCard;
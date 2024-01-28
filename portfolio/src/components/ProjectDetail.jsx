import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {

  const{projectId} = useParams();

  const project = projectsData.find(project => project.id === Number(projectId))
  const{id, img_path, title, description, tools, url} = project;
  const image = import.meta.env.BASE_URL + 'assets/images/' + img_path;

  return (    
    <div className="card project">   
      <div className="card-title">{`Project ${id}`}</div>  
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

export default ProjectDetail;
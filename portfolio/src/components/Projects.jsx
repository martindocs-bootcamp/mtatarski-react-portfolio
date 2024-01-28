import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import ProjectGallery from './ProjectGallery';
import getImagePath from '../utils/getImagePath';

const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {
        projectsData.map(project => {          
          // The base URL of your application during development or production.
          const image = getImagePath(project.img_path);
          
          return(
            <div className="col" key={project.id}>
              <Link to={`/project/${project.id}`}>             
                  <ProjectGallery                     
                    image={image} 
                    title={project.title} 
                  />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Projects;
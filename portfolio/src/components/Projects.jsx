import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import ProjectGallery from './ProjectGallery';
import getImagePath from '../utils/getImagePath';

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <h2 className='projects-headline'>Projects</h2>
        <span className='projects-num'>{projectsData.length}</span>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 projects-container">
        {
          projectsData.map(project => {                    
            const image = getImagePath(project.img_path);
            
            return(
              <div className="col projects-card" key={project.id}>
                <Link to={`/project/${project.id}`} state={{project}}>             
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
    </>
  )
}

export default Projects;
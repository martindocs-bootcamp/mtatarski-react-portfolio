import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import ProjectGallery from './ProjectGallery';
import getImagePath from '../utils/getImagePath';

const Projects = () => {

  // Render the list of projects
  return (
    <>
      {/* Projects section header */}
      <div className='projects'>
        <h2 className='projects-headline'>Projects</h2>

        {/* Display the total number of projects */}
        <span className='projects-num'>{projectsData.length}</span>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 projects-container">
        {
          // Map through each project and render a project card
          projectsData.map(project => {     
            
            // Get the full image path 
            const image = getImagePath(project.img_path);
            
            return(
              <div className="col projects-card" key={project.id}>
                {/* Link to the detailed project page */}
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
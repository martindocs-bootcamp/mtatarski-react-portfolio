import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {
        projectsData.map(project => {
          const{id, img_path, title, description, tools, url} = project;
          
          return(
            <div className="col" key={id}>
              <ProjectCard                 
                image={img_path}
                title={title}
                description={description}
                tools={tools}
                url={url}               
              />
            </div>

          )
        })
      }
    </div>
  )
}

export default Projects;
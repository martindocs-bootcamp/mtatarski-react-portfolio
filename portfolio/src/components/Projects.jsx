import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {
        projectsData.map(project => {
          const{id, img_path, title, description, tools, url} = project;
          
          // The base URL of your application during development or production.
          const image = import.meta.env.BASE_URL + 'assets/images/' + img_path;

          return(
            <div className="col" key={id}>
              <ProjectCard                 
                image={image}
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
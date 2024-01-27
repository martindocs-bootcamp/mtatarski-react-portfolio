import {PropTypes} from 'prop-types';

const ProjectCard = ({
  image, 
  title, 
  description, 
  link_live, 
  link_code
}) => {
  return (
    <div className="card card-custom">     
      <img src={image} className="card-img-top" alt={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-footer">
          <a href={link_live} className="btn btn-primary card-btn-live">Live</a>          
          <a href={link_code} className="btn btn-secondary card-btn-code">Code</a>          
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  link_live: PropTypes.string.isRequired, 
  link_code: PropTypes.string.isRequired
}

export default ProjectCard;
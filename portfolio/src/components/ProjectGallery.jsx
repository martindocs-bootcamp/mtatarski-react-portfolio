import { PropTypes } from 'prop-types';

const ProjectGallery = ({image, title}) => {
   
  // Render the project gallery card
  return (
    <div className="card gallery">
      <div className="card-header">
        <p className="card-text gallery-text">{title}</p>
      </div>
      <img src={image} className="card-img-top gallery-img" alt={title} />      
    </div>
  )
}

// PropTypes for type-checking
ProjectGallery.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectGallery;
import { PropTypes } from 'prop-types';

const ProjectGallery = ({image, title}) => {
   
  return (
    <div className={`card gallery`}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  )
}

ProjectGallery.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectGallery;
import { PropTypes } from "prop-types";
const ContactModal = ({msgHeader, msg}) => {
  
  return (
    <div className="modal fade" id="submitMsg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          {/* Modal header */}
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{msgHeader}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

           {/* Modal body */}
          <div className="modal-body">
            <p>{msg}</p>
          </div>

          {/* Modal footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>            
          </div>
        </div>
      </div>
    </div>
  )
}

// PropTypes for type-checking
ContactModal.propTypes = {
  msgHeader: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
}

export default ContactModal;
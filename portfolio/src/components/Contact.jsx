import {useState} from 'react';
import ContactModal from './ContactModal';
import resume from '../assets/docs/Marcin-Tatarski-CV.pdf';
import openNewTab from '../utils/openDocInNewTab';

const Contact = () => {
  // State to manage form input values
  const [prop, setProp] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })

  // State to track if the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  // Handle form submission
  const handleSubmit = () => {
    const{name, subject, email, message} = prop;

    // Check if any required field is empty
    if(!name || !subject || !email || !message){
      setFormSubmitted(false);
    }else{
      // Set formSubmitted to true and clear the form
      setFormSubmitted(true);
      handleClear();
    }
  }

  // Clear form input values
  const handleClear = () => {
    setProp({
      name: '',
      subject: '',
      email: '',
      message: '',
    })
  }

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setProp({...prop, [name]: value});
  }
 
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-8 mx-auto">
        <section className="contact">      
          <h2 className='contact-header'>Contact</h2>
          <h3 className='contact-tagline'>Feel free to reach out with any questions or inquiries.</h3>
          <form className="contact-form" onSubmit={(e)=> e.preventDefault()}>

            {/* Form name input fields */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label contact-label">Full name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name"
                value={prop.name}
                placeholder='Full name'
                onChange={handleInputChange}
              />
            </div>

            {/* Form subject input fields */}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label contact-label">Subject</label>
              <input 
                type="text" 
                className="form-control" 
                id="subject" 
                name="subject"
                value={prop.subject}
                placeholder='Subject'
                onChange={handleInputChange}
              />
            </div>

            {/* Form email input fields */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label contact-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={prop.email}
                placeholder='email'
                onChange={handleInputChange}
              />
            </div>

            {/* Form message input fields */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label contact-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="3"
                name="message"
                value={prop.message} 
                placeholder='message'
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="contact-buttons">
              
              {/* Submit button trigger a modal */}
              <button 
                type='button'          
                className="btn contact-submit"
                data-bs-toggle="modal" 
                data-bs-target="#submitMsg"   
                onClick={handleSubmit}      
                >Submit</button>
              
              {/* Clear button */}
              <button 
                type="button"   
                className="btn btn-danger contact-clear"
                onClick={handleClear}
              >Clear</button>
            </div>
          </form>          
                   
          {/* Modal for form submission message */}
          <ContactModal 
            msgHeader={formSubmitted ? 'Form Submitted' : 'Form Not Submitted'} 
            msg={
              formSubmitted ? 
              'Thank you for reaching out! Your message has been submitted successfully.' : 
              'All fields are required'  
            } 
          />
        </section>
      </div>

      {/* Contact information section */}
      <div className="col-12 col-md-5 col-lg-3 mt-4">       
        <div className="card border-0">
          <div className="card-header bg-transparent">Let&apos;s get in touch</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item contact-email">
              <i className="fa-regular fa-envelope contact-icon"></i> 
              <a href="mailto:martin.tatarski@gmail.com">martin.tatarski@gmail.com</a>              
            </li>
            <li className="list-group-item contact-linkedin">
              <i className="fa-brands fa-linkedin contact-icon"></i>
              <a 
                href="https://www.linkedin.com/in/marcin-tatarski/"
                target='_blank'
                rel="noopener noreferrer"
              >/marcin-tatarski</a> 
            </li>          
            <li className="list-group-item contact-twitter border-bottom">
              <i className="fa-brands fa-square-x-twitter contact-icon"></i>
              <a 
                href="https://twitter.com/MartinTatarski"
                target='_blank'
                rel="noopener noreferrer"
              >/MartinTatarski</a> 
            </li>          
            <li className="list-group-item contact-resume border-bottom">
              <i className="fa-regular fa-file contact-icon"></i>
              <button onClick={()=> openNewTab(resume)}>Resume</button>
            </li>          
          </ul>
        </div>
      </div>

    </div>    
  )
}

export default Contact;
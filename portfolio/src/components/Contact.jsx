import {useState} from 'react';
import ContactModal from './ContactModal';

const Contact = () => {
  const [prop, setProp] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  const handleSubmit = () => {
    const{name, subject, email, message} = prop;

    if(!name || !subject || !email || !message){
      setFormSubmitted(false);
    }else{
      setFormSubmitted(true);
      handleClear();
    }
  }

  const handleClear = () => {
    setProp({
      name: '',
      subject: '',
      email: '',
      message: '',
    })
  }

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setProp({...prop, [name]: value});
  }

  return (
    <section className="contact">      
      <h2>Feel free to reach out with any questions or inquiries.</h2>

      <form className="contact" onSubmit={(e)=> e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name"
            value={prop.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input 
            type="text" 
            className="form-control" 
            id="subject" 
            name="subject"
            value={prop.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={prop.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="3"
            name="message"
            value={prop.message} 
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="buttons">
          <button 
            type='button'          
            className="btn btn-primary submit"
            data-bs-toggle="modal" 
            data-bs-target="#submitMsg"   
            onClick={handleSubmit}      
            >Submit</button>
          <button 
            type="button"   
            className="btn btn-danger clear"
            onClick={handleClear}
          >Clear</button>
        </div>
      </form>

      <div className="card">
        <div className="card-header">Alternatywelly you can reach me</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fa-regular fa-envelope"></i> 
            <a href="mailto:martin.tatarski@gmail.com">martin.tatarski@gmail.com</a>              
          </li>
          <li className="list-group-item">
            <i className="fa-brands fa-square-x-twitter"></i>
            <a 
              href="https://twitter.com/MartinTatarski"
              target='_blank'
              rel="noopener noreferrer"
            >/MartinTatarski</a> 
          </li>          
        </ul>
      </div>
      
      <ContactModal 
        msgHeader={formSubmitted ? 'Form Submitted' : 'Form Not Submitted'} 
        msg={
          formSubmitted ? 
          'Thank you for reaching out! Your message has been submitted successfully.' : 
          'All fields are required'  
        } 
      />
    </section>
  )
}

export default Contact;
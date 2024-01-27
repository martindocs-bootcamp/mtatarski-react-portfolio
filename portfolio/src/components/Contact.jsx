import {useState} from 'react';

const Contact = () => {
  const [prop, setProp] = useState({
    email: '',
    message: '',
  })

  const handleSubmit = () => {

  }

  const handleClear = () => {
    setProp({
      email: '',
      message: '',
    })
  }

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setProp({...prop, [name]: value});
  }

  return (
    <form className="contact" onSubmit={(e)=> e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
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
        <div 
          className="btn btn-primary submit"
          onClick={handleSubmit}
        >Submit</div>
        <div 
          className="btn btn-danger clear"
          onClick={handleClear}
        >Clear</div>
      </div>
    </form>
  )
}

export default Contact;
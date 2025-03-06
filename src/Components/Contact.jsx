import React from "react";
import "../styles/Contact.css"
const Contact=() =>{
  return(
    <div>
        <div className="contact-container">
      <h2 className="contact-header">GET IN TOUCH</h2>
      <p className="contact-description">
        I'm a paragraph. Click here to add your own text and edit me. I'm a great place for
        you to tell a story and let your users know a little more about you.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h3>FIND YOUR NEXT HOME</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just
            click "Edit Text" or double-click me to add your own content and make
            changes to the font.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <div className="form-group radio-group">
            <label>Interested in:</label>
            <input type="radio" name="interest" /> Buy
            <input type="radio" name="interest" /> Rent
            <input type="radio" name="interest" /> Other
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}





export default Contact
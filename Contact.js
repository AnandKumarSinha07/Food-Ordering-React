const Contact=()=>{
   return(
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
   )
}

export default Contact;
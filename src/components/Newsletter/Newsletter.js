import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting email: ${email}`);
// var sendgrid = require("sendgrid")("YOUR_SENDGRID_API_KEY");
// var email1 = new sendgrid.Email();

// email1.addTo("test@sendgrid.com");
// email1.setFrom("you@youremail.com");
// email1.setSubject("Sending with SendGrid is Fun");
// email1.setHtml("and easy to do anywhere, even with Node.js");
// sendgrid.send(email1);
    // TODO: implement logic to submit email to backend or email service
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div classsName="newsletter-main">
    <form onSubmit={handleSubmit} className="newsletter">
      <h2>Join our newsletter and stay updated!</h2>
      <div className="newsletter-input">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
    </div>
  );
}

export default Newsletter;
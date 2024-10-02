import './Contactus.css';
import whatsappIcon from '../images/WhatsApp.webp'; // Adjust the path if needed
import gmailIcon from '../images/google-mail-gmail-icon-logo-symbol-free-png.webp'; // Adjust the path if needed

const Contactus = () => {
  return (
    <div className='contactus' id='contact'>
      <div className='contactus-content'>
        <div className='contactus-content-left'>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Whether you have a question, need help with your order, or just want to share feedback, feel free to reach out.</p>
          
          <div className="contactus-icons">
            {/* WhatsApp link */}
            <a href="https://wa.me/919345058993" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="contactus-icon" />
            </a>
            {/* Gmail link */}
            <a href="mailto:himalayandryfruitscompany@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={gmailIcon} alt="Gmail" className="contactus-icon" />
            </a>
          </div>
        </div>

        <div className='contactus-content-center'>
          <h2>Contact Details</h2>
          <ul>
            <li><strong>Email:</strong>  <a className="gm" href="mailto:himalayandryfruitscompany@gmail.com" target="_blank" rel="noopener noreferrer">himalayandryfruitscompany@gmail.com </a></li>
            <li ><strong>Phone:</strong> <a className="ph" href="tel:+919345058993">+91 93450 58993</a></li>

          </ul>
        </div>

        <div className='contactus-content-right'>
          <h2>Address</h2>
          <ul>
            <li>HO: No.90, PT Rajan Road, Madurai - 625017</li>
            <li>BO: No.11/70, Mogappair East, Chennai - 600037</li>
            <li><strong>Working Hours:</strong> Monday to Friday, 9 AM - 5 PM</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='contactus-copyright'>© 2024 Himalayan Dry Fruits Company. All rights reserved.</p>
    </div>
  );
};

export default Contactus;

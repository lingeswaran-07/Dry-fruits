
import './Contactus.css';

const Contactus = () => {
  return (
    <div className='contactus' id='contact'>
      <div className='contactus-content'>
        <div className='contactus-content-left'>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Whether you have a question, need help with your order, or just want to share feedback, feel free to reach out.</p>
        </div>

        <div className='contactus-content-center'>
          <h2>Contact Details</h2>
          <ul>
            <li><strong>Email:</strong> himalayandryfruitscompany@gmail.com</li>
            <li><strong>Phone:</strong> +91 93450 58993</li>
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

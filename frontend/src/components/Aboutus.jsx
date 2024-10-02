import './Aboutus.css'

const Aboutus = () => {
  return (
    <div className="about-container" id='about'>
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        At <span className="brand-name">HIMALAYAN™</span>, we specialize in providing high-quality dry fruits and nuts to help you snack smarter. Our products are carefully selected from reliable farms to ensure freshness and rich flavor. From almonds to pistachios, we offer a variety of healthy options free from any artificial additives.
      </p>
      <p className="about-mission">
        We’re passionate about promoting a healthy lifestyle with natural, nutritious snacks. By partnering with ethical suppliers, we ensure both quality and sustainability. We’re proud to be your go-to source for delicious and wholesome dry fruits.
      </p>
      <div className="ceo-section">
        <p className="ceo-message">
          Thank you for choosing Himalayan™ Dry Fruits Company,
        </p>
        <p className="ceo-name">
          <strong>Pon Mugesh Alagarsamy</strong><br />
          Founder and CEO
        </p>
      </div>
    </div>
  )
}

export default Aboutus

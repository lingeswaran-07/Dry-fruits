import './Delivery.css'

const Delivery = () => {
  return (
    <div className="delivery-container" id='delivery'>
      <h1 className="delivery-title">Delivery Policy</h1>
      
      <p className="delivery-intro">
        At Himalayan, we strive to get your orders to you as quickly and safely as possible. Here’s how it works:
      </p>

      <ul className="delivery-list">
        <li>
          <strong className='st'>Processing Time</strong>: Orders are processed within 1 or 2 business days. (May vary during festival days, 5-7 business days).
        </li>
        <li>
          <strong  className='st'>Shipping Time</strong>: Delivery usually takes between 3-7 business days, depending on your location.
        </li>
        <li>
          <strong  className='st'>Shipping Cost</strong>: We offer free shipping on orders above 100 boxes. For orders below this, standard shipping rates apply.
        </li>
        <li>
          <strong  className='st'>Tracking</strong>: Once your order is shipped, you’ll receive a tracking number to follow your package.
        </li>
      </ul>
        
      <p className="ceo-name">
          <strong>Surender Kumaresan</strong><br />
          Cofounder and CMO
        </p>
        <br/>

      <p className="delivery-contact">
        If you have any questions about your delivery, feel free to contact us!
      </p>
      
    </div>
  )
}

export default Delivery

import pro1 from '../images/WhatsApp Image 2024-10-01 at 22.43.15_5ef7a641.jpg'
import pro2 from '../images/WhatsApp Image 2024-10-01 at 22.43.16_0d884cea.jpg'
import './product.css'

const Products = () => {
  return (
    <>
    <div id='products'> 
     <h1>OUR PRODUCTS</h1>
      <img src={pro1} alt="Product" className="product-image1"/>
    </div>
    <div>
        <img src={pro2} className='product-image2' />
    </div> 
    </>

  )
}

export default Products;

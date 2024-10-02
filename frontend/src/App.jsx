import './index.css'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Products from './components/Products'
import Delivery from './components/Delivery'
import Contactus from './components/Contactus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Products/>
      <Delivery/>
      <Contactus/>
    </div>
  )
}

export default App

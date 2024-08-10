import './App.css';
import Product from './Product';

function App() {
  return (
    <div>
      <div>Simple react add to cart app - using context API</div>
      <Product name="Macbook" price={3000} />
      <Product name="iPhone" price={999} />
      <Product name="Headphones" price={150} />
      <Product name="Mouse" price={50} />
    </div>
  );
}

export default App;

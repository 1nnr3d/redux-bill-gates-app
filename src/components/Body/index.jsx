import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

import './style.css';

export default function Body() {
  const items = useSelector(state => state.shop.items);

  return (
    <div className="productsCard">
      {
        items.map(product => (
          <ProductCard key={product.id} value={product} />
        ))
      }
    </div>
  )
}
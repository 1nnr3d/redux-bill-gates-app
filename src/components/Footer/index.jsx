import './style.css';

import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

export default function Footer() {
  const purchasedItems = useSelector(state => state.shop.purchasedItems);
  const total = useSelector(state => state.shop.total);

  return (
    <div className="footerCard">
      <h1 className="footerTitle">Your Receipt</h1>

      {
        purchasedItems.map(item => (
          <div key={item.productID} className="item">
            <div className="itemName">{item.productName}</div>
            <div className="itemNumber">x{item.productNumber}</div>
            <div className="itemPrice">
              <NumberFormat value={item.productPrice} displayType='text' thousandSeparator={true} prefix='$' />
            </div>
          </div>
        ))
      }
      <hr />
      <div className="totalCard">
        <span className="title">TOTAL</span>
        <span className="totalPrice">
          <NumberFormat value={total} displayType='text' thousandSeparator={true} prefix='$' />
        </span>
      </div>
    </div>
  )
}


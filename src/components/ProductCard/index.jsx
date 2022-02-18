/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { addToPurchased, removeToPurchased } from '../../app/features/shopSlice';


export default function ProductCard({ value }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productID: value.id,
    productName: value.name,
    productPrice: value.price,
    productNumber: 0
  });

  const productNumber = useSelector(state => {
    const currentItem = state.shop.purchasedItems.findIndex(purchasedItem => purchasedItem.productID === product.productID);
    return currentItem === -1 ? 0 : state.shop.purchasedItems[currentItem].productNumber;
  });
  const money = useSelector(state => state.shop.money);

  const handleBuy = () => {
    dispatch(addToPurchased(product));
  }

  const handleSell = () => {
    dispatch(removeToPurchased(product));
  }

  useEffect(() => {
    setProduct({ ...product, productNumber: productNumber });
  }, [productNumber])

  return (
    <div className="productCard">
      <div className="productHeader">
        <img src={value.img} alt="..." />
      </div>
      <div className="productBody">
        <h3>{value.name}</h3>
        <span>
          <NumberFormat value={value.price} displayType='text' thousandSeparator={true} prefix='$' />
        </span>
      </div>
      <div className="productButtons">
        <button className="sellBtn"
          disabled={product.productNumber > 0 ? false : true}
          onClick={handleSell}>Sell</button>
        <input className="number" type="text" disabled
          min="0"
          step="1"
          value={product.productNumber}
        />
        <button className="buyBtn"
          disabled={product.productPrice > money ? true : false}
          onClick={handleBuy}>Buy</button>
      </div>
    </div >
  )
}

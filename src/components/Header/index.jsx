import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

import './style.css'

export default function Header() {
  const money = useSelector(state => state.shop.money);

  return (
    <>
      <div className="titleCard">
        <img src="img/billgates.jpg" alt="..." />
        <div className="name">Spend Bill Gates' Money </div>
      </div>
      <br />
      <div className="moneyCard">
        <NumberFormat value={money} displayType='text' thousandSeparator={true} prefix='$' />
      </div>
    </>
  )
}

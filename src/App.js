import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

import { useSelector } from 'react-redux';

function App() {
  const purchasedItems = useSelector(state => state.shop.purchasedItems.length)
  return (
    <div className="App">
      <Header />
      <br />
      <Body />
      <br />
      {
        purchasedItems > 0 && <Footer />
      }
    </div>
  );
}

export default App;

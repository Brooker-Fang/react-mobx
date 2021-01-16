import './App.css';
import CounterPage from './view/CounterPage'
import BuyCartPage from './view/BuyCartPage'
import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <div className="App">
      {/* <CounterPage></CounterPage> */}
      <BuyCartPage></BuyCartPage>
    </div>
  );
}

export default hot(App);

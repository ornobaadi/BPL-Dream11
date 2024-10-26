import './App.css';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero/Hero.jsx';
import { useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players.jsx';
import Footer from './components/Footer/Footer.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';

function App() {
  const [coins, setCoins] = useState(0);

  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };

  return (
    <div className="relative">
      <Header coins={coins} handleToAddCoin={handleToAddCoin} />
      <Hero handleToAddCoin={handleToAddCoin} />
      <div className="pb-32">
        <Players coins={coins} setCoins={setCoins} />
      </div>

      <Newsletter />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;

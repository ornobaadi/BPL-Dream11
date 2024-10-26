import './App.css'
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero/Hero.jsx'
import { useState } from 'react'
import Header from './components/Header/Header'
import Players from './components/Players/Players.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [coins, setCoins] = useState(0);

  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };


  return (
    <>
      <Header coins={coins} handleToAddCoin={handleToAddCoin}></Header>
      <Hero handleToAddCoin={handleToAddCoin}></Hero>
      <Players coins={coins} setCoins={setCoins}></Players>
      <Toaster position="top-center" />
      <Footer></Footer>
    </>
  )
}

export default App

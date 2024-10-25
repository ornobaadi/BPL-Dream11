import './App.css'
import { useState } from 'react'
import Available from './components/Available/Available.jsx'
import Header from './components/Header/Header'
import Players from './components/Players/Players.jsx'

function App() {
  const [coins, setCoins] = useState(0);

  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };


  return (
    <>
      <Header  coins={coins} handleToAddCoin={handleToAddCoin}></Header>
      <Available></Available>
      <Players></Players>
    </>
  )
}

export default App

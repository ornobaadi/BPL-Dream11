import './App.css'
import Available from './components/Available/Available.jsx'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero.tsx'
import Players from './components/Players/Players.jsx'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Available></Available>
      <Players></Players>
    </>
  )
}

export default App

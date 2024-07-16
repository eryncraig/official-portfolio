import styles from './App.module.css'
import { NavBar } from './components/Navbar/navbar'
import { Hero } from './components/Hero/hero'
import { About } from './components/About/about'

function App() {


  return (
    <div className={styles.App} >
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default App

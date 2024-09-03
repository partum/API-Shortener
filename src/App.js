import './styles/App.css';
import Nav from './components/nav.js'
import Hero from './components/hero.js'
import Stats from './components/stats.js'
import Cta from './components/cta.js'


function App() {
  return (
    <div className="App">
      
      <div class="container">
        <Nav/>
      </div>
      <Hero/>
      <div className='stats'>
        <Stats/>
      </div>
      <Cta/>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://partum.github.io" target="_blank" rel="noreferrer">Julia Arrington</a>.
      </div>
    </div>
  );
}

export default App;

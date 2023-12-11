import ironLogo from './assets/ironhack-logo-xs.png';
import menuIcon from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import './App.css';

function App() {
  return (
      <div className="app">
        <section id="topMenu"> {/* Top menu and button */}
          <div id="iconsTop">
            <img src={ironLogo} className="logo" alt="Ironhack logo" />
            <img src={menuIcon} className="menu" alt="Menu ICon" />
          </div>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button class="button">Awesome!</button>
        </section>
        <section id="icons"> {/* Computer icons */}
          <div>
             <img src={icon1} className="icon" alt="Declarative"/>
             <h2>Declarative</h2>
             <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src={icon2} className="icon" alt="Components"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src={icon3} className="icon" alt="Single-Way"/>
            <h2>Single-Way</h2>
           <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src={icon4} className="icon" alt="JSX"/>
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
  )
}

export default App;

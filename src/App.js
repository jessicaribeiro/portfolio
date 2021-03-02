import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";

function App() {
    return (
        <div className="Jessica Portfolio">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*  /!*colocar navbar*!/*/}
            {/*  /!*colocar botao para fazer download do meu cv*!/*/}
            {/*</header>*/}
            <Home/>
            {/*<section>About Me</section>*/}
            {/*<section>Portfolio</section>*/}
            <WorkExperience/>
            {/*/!*colocar certificados*!/*/}
            {/*/!*colocar o me cv downloable*!/*/}
            {/*<section>Education Experience</section>*/}
            {/*<section>Education Experience</section>*/}
            {/*<section>Contact</section>*/}
            {/*<footer>*/}
            {/*  <div>social networks</div>*/}
            {/*</footer>*/}
        </div>
    );
}

export default App;

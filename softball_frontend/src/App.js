import { BrowserRouter as Router, Route } from 'react-router-dom';

import HittersList from './components/HittersList';
import Header from './components/Header';
import HomeWelcome from './components/HomeWelcome';

import './App.css';
import Hitters from './components/Hitters';
import HitterProfile from './components/HitterProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Route exact path="/">
            <HomeWelcome />
            <h2>Top Hitters</h2>
            <br />
            <HittersList limit="5" />
          </Route>
          <Route exact path="/hitters">
            <Hitters />
          </Route>
          <Route path="/hitters/:id">
            <HitterProfile />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;

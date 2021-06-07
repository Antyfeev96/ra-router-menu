import { BrowserRouter as Router, Route } from'react-router-dom';
import './App.scss';
import DriftPage from './Components/DriftPage/DriftPage';
import ForzaPage from './Components/ForzaPage/ForzaPage';
import HomePage from './Components/HomePage/HomePage';
import Menu from './Components/Menu/Menu';
import TimeAttackPage from './Components/TimeAttackPage/TimeAttackPage';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

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
          <Route path="ra-router-menu/" exact component={HomePage} />
          <Route path="ra-router-menu/drift" component={DriftPage} />
          <Route path="ra-router-menu/timeattack" component={TimeAttackPage} />
          <Route path="ra-router-menu/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

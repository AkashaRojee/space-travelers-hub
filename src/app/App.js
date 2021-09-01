/* eslint-disable */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../features/header/Header';
import Rockets from '../features/rockets/Rockets';
import Dragons from '../features/dragons/Dragons';
import Missions from '../features/missions/Missions';
import Profile from '../features/profile/Profile';
import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter basename="/space-travelers-hub">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/dragons">
            <Dragons />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

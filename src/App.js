import MainPage from './components/MainPage';
import MovieInfo from './components/MovieInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/movies/:id'>
          <MovieInfo />
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

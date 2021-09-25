import MainPage from './components/MainPage';
import MovieInfo from './components/MovieInfo';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
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
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

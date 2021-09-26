import MoviesGrid from './components/movies/MoviesGrid';
import MovieDetails from './components/movies/MovieDetails';
import MyAccount from './components/MyAccount';
import MoviesSearchGrid from './components/movies/MoviesSearchGrid';
import SignUp from './components/user/SignUp';
import Header from './components/Header';
import SignIn from './components/user/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/movies/:id'>
          <MovieDetails />
        </Route>
        <Route exact path='/'>
          <MoviesGrid />
        </Route>
        <Route exact path='/myaccount'>
          <MyAccount />
        </Route>
        <Route exact path='/movies/search/:query'>
          <MoviesSearchGrid />
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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navigation/navbar';
import Home from './pages/home/home';
import Start from './pages/quiz/quiz';
import About from './pages/about/about';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navigation/navbar';
import Home from './pages/home/home';
import Start from './pages/quiz/quiz';
import About from './pages/about/about';
import Questions from './pages/questions/questions';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/about" component={About} />
          <Route exact path="/questions" component={Questions} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

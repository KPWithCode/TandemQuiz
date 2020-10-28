import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navigation/navbar';
import Home from './pages/home/home';
import Start from './pages/quiz/quiz'
function App() {
  return (
   <Router>
     <>
     <Nav />
     <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/start" component={Start} />

     </Switch>
     </>
   </Router>
  );
}

export default App;

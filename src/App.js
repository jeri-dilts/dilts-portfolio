import './App.css';
import { useHistory, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import Main from './screens/Main/Main';
// import About from './screens/About/About';
import Portfolio from './screens/Porfolio/Portfolio';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/about'>{/* <About/> */}</Route>
          <Route path='/portfolio'><Portfolio /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path='/'>{/*<Main />*/}</Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

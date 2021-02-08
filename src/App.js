import './App.css';
import { useHistory, Switch, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Main from './screens/Main/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

import { useHistory, Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react'
import Layout from './components/Layout/Layout';
import Main from './screens/Main/Main';
import About from './screens/About/About';
import Portfolio from './screens/Porfolio/Portfolio';
import Contact from './screens/Contact/Contact';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/ThanksForViewingMyWebsite' component={Main} />
        <Fragment>
          <Layout>
            <Route path='/ThanksForViewing/about' component={About} />
            <Route path='/ThanksForViewing/portfolio' component={Portfolio} />
            <Route path='/ThanksForViewing/contact' component={Contact} />
          </Layout>
        </Fragment>
      </Switch>
    </div>
  );
}
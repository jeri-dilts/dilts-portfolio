import { useHistory, Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react'
import Layout from './components/Layout/Layout';
import Main from './screens/Main/Main';
import About from './screens/About/About';
import Portfolio from './screens/Porfolio/Portfolio';
import Contact from './screens/Contact/Contact';
import ThankYou from './screens/ThankYou/ThankYou';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/ThanksForViewing!' component={Main} />
        <Fragment>
          <Layout>
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route path='/thankyou' component={ThankYou} />
          </Layout>
        </Fragment>
      </Switch>
    </div>
  );
}
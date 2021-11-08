import { Switch, Route } from '@modern-js/runtime/router';

import { ConnectButtons } from './web3-modal';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="container">
        <h2 className="description">
          Web3 Modal Test (
          <a href="https://github.com/robot-ux/web3-modal-example">Github</a>)
        </h2>
        <div className="grid">
          <ConnectButtons />
        </div>
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;

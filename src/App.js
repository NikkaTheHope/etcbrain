import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Refactoring from "./routes/refactoring/Refactoring";
import Home from "./routes/Home";
const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/refactoring">
          <Refactoring />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import ExampleIf from "./components/conditionIf/ExampleIf";
import ExampleIfElse from "./components/conditionIfElse/ExampleIfElse";
import ExampleTernary from "./components/conditionTernary/ExampleTernary";
import ExampleEquals from "./components/conditionLogical/ExampleEquals";
import ExampleSwitchCase from "./components/conditionSwitchCase/ExampleSwitchCase";
import ExampleNested from "./components/conditionNested/ExampleNested";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exampleIf">
                  1. Conditional Rendering in React: IF
                </Link>
              </li>
              <li>
                <Link to="/exampleIfElse">
                  2. Conditional Rendering in React: IF ELSE
                </Link>
              </li>
              <li>
                <Link to="/exampleTernary">
                  3. Conditional Rendering in React: TERNARY
                </Link>
              </li>
              <li>
                <Link to="/exampleLogical">
                  4. Conditional Rendering in React: &&
                </Link>
              </li>
              <li>
                <Link to="/exampleSwitchCase">
                  5. Conditional Rendering in React: switch case
                </Link>
              </li>
              <li>
                <Link to="/exampleNested">
                  6. Nested Conditional Rendering in React
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/exampleIf" component={ExampleIf} />
            <Route path="/exampleIfElse" component={ExampleIfElse} />
            <Route path="/exampleTernary" component={ExampleTernary} />
            <Route path="/exampleLogical" component={ExampleEquals} />
            <Route path="/exampleSwitchCase" component={ExampleSwitchCase} />
            <Route path="/exampleNested" component={ExampleNested} />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;

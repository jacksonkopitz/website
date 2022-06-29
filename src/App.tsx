import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Jmt from "./components/Jmt";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jmt" component={Jmt} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

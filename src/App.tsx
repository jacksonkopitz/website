import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/success" component={Success} />
        <Route exact path="/home" component={Llama} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/add-posting" component={NewAddPosting} />
        <Route exact path="/posting/:id" component={DetailedPosting} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

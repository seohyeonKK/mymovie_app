import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  );
};

export default App;

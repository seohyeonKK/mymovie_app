import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      {/* exact는 / 에서만! 다른 데서는 nope */}
      <Route path="/about" component={About} />
      {/* 렌더링 할 스크린, 뭘할지 정해주는 props */}

      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </HashRouter>
  );
}

export default App;

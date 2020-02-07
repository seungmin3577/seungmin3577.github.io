import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./screen/Main";
import Main2 from "./screen/Main2";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ height: "100%" }}>
        <Router>
          <Switch>
            <Route path="/main" component={Main}></Route>
            <Route path="/" component={Main2}></Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;

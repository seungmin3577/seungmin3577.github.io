import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./screen/Main";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Main}></Route>
            <Route path="/career" component={Main}></Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;

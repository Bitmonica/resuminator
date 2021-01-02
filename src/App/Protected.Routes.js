import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserAccount from "../components/User/UserAccount";
import Content from "../layout/Content";
import NotFound from "./404";
import Providers from "./Providers";

const ProtectedRoutes = ({ children }) => {
  return (
    <Providers>
      <Header />
      <Switch>
        <Route exact path="/">
          {children}
          <Content />
        </Route>
        <Route exact path="/account" component={UserAccount} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Providers>
  );
};

export default ProtectedRoutes;

import { Route, Switch } from "react-router-dom";

// import PrivateRoute from "components/common/shared/PrivateRoute";
import Home from "components/pages/Home/Home";
import Login from "components/pages/Login/Login";
import ProductCard from "components/pages/ProductCard/ProductCard";

const Routs = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/product-card" component={ProductCard} />
      {/* <PrivateRoute
        exact
        path=""
        component={}
      /> */}

      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
};

export default Routs;

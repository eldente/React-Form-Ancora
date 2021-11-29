import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../App";

function PublicRoute({ Page, path }) {
  const { isAuth } = useContext(ContextProvider);
  return (
    <Route
      exact
      path={path}
      render={() => {
        return !isAuth ? <Page /> : <Redirect exact to="/" />;
      }}
    />
  );
}

export default PublicRoute;

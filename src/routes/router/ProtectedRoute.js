import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../App";

function ProtectedRoute({ Page, path }) {
  const { isAuth, setIsAuth } = useContext(ContextProvider);
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <Route
      exact
      path={path}
      render={() => {
        return isAuth ? (
          <>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
            <Page />
          </>
        ) : (
          <Redirect exact to="/login" />
        );
      }}
    />
  );
}

export default ProtectedRoute;

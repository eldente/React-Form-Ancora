import { useState, createContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "./routes/LoginForm";
import Questionnaire from "./routes/Questionnaire";
import WelcomePage from "./routes/WelcomePage";
import ProtectedRoute from "./routes/router/ProtectedRoute";
import PublicRoute from "./routes/router/PublicRoute";

export const ContextProvider = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  console.log(isAuth);

  return (
    <ContextProvider.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        <Switch>
          <PublicRoute Page={LoginForm} path="/login" />
          <ProtectedRoute Page={Questionnaire} path="/quest" />
          <ProtectedRoute Page={WelcomePage} path="/" />
        </Switch>
      </Router>
    </ContextProvider.Provider>
  );
}

export default App;

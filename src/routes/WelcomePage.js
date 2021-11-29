import { useHistory } from "react-router-dom";

function WelcomePage() {
  const history = useHistory();

  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <button
        onClick={() => {
          history.push("/quest");
        }}
      >
        Start Questionnaire
      </button>
    </div>
  );
}

export default WelcomePage;

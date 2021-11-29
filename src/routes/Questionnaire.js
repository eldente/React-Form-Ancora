import { data } from "../utils/db";

function Questionnaire() {
  console.log("quest");

  return (
    <div>
      {data.map((question, i) => {
        return (
          <div key={i} className="card">
            <div className="card-header">{question.title}</div>
            {question.selections.map((checkbox, i) => {
              return (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{checkbox.label}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Questionnaire;

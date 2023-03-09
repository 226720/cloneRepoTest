import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function App() {
  const data = {
    labels: ["Facebook", "Instagram", "Twitter"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["aqua", "red", "lightblue"],
      },
    ],
  };
  const options = {};

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div
        style={{
          padding: "20px",
          width: "50%",
        }}
      >
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
}

export default App;

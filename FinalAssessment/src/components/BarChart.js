import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function BarChart() {
  return (
    <div className="App" align="right" margin-right="100px">
      <h3 align="center">USERS</h3>
      <div style={{ maxWidth: "650px" }} align="right">
        <Bar
          data={{
            labels: ["Online Users", "Offline Users", "Both Users", "Others"],
            datasets: [
              {
                label: "total count/value",
                data: [1552, 1319, 613, 1400],
                backgroundColor: ["aqua", "green", "red", "yellow"],
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default BarChart;

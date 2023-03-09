
import BarChart from './components/BarChart';
import './App.css';
import { PieChart, Pie} from 'recharts';
import Login from './components/Login';

function App() {
  const data = [
    {name: 'Technical Guru', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Byju-i-knack', students: 200},
    {name: 'knowledge-o-mania', students: 1000}
  ];
  return (
    <div className="App">
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart>
  <BarChart />

     {/* <Login /> */}
    </div>
  );
}

export default App;

import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar"
import { BarChart, ComposedChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Sector, Cell } from "recharts";

export default function Home() {
  const data = [
    {
      "name": "Page A",
      "uv": 1000,
      "fill": "#bab4b4"
    },
    {
      "name": "Page B",
      "uv": 600,
      "fill": "#bab4b4"
    },
    {
      "name": "Page C",
      "uv": 900,
      "fill": "#bab4b4"
    },
    {
      "name": "Page D",
      "uv": 4000,
      "fill": "#14b652"
    },
    {
      "name": "Page E",
      "uv": 1890,
      "fill": "#bab4b4"
    },
    {
      "name": "Page F",
      "uv": 1500,
      "fill": "#bab4b4"
    },
    {
      "name": "Page G",
      "uv": 390,
      "fill": "#bab4b4"
    }
  ]

  const data1 = [
    {
      "name": "Page A",
      "uv": 1000,
      "fill": "#bab4b4"
    },
    {
      "name": "Page B",
      "uv": 600,
      "fill": "#bab4b4"
    },
    {
      "name": "Page C",
      "uv": 900,
      "fill": "#bab4b4"
    },
    {
      "name": "Page D",
      "uv": 4000,
      "fill": "#483d8b"
    },
    {
      "name": "Page E",
      "uv": 1890,
      "fill": "#bab4b4"
    },
    {
      "name": "Page F",
      "uv": 1500,
      "fill": "#bab4b4"
    },
    {
      "name": "Page G",
      "uv": 390,
      "fill": "#bab4b4"
    }
  ]

  const data2 = [
    {
      "name": "Page A",
      "uv": 2000,
      "fill": "#bab4b4"
    },
    {
      "name": "Page B",
      "uv": 600,
      "fill": "#bab4b4"
    },
    {
      "name": "Page C",
      "uv": 1500,
      "fill": "#bab4b4"
    },
    {
      "name": "Page D",
      "uv": 4000,
      "fill": "#eb7201"
    },
    {
      "name": "Page E",
      "uv": 1890,
      "fill": "#bab4b4"
    },
    {
      "name": "Page F",
      "uv": 1500,
      "fill": "#bab4b4"
    },
    {
      "name": "Page G",
      "uv": 390,
      "fill": "#bab4b4"
    }
  ]

  const data4 = [
    {
      "name": "Page A",
      "Task_Created": 4000,
      "Task_Completed": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "Task_Created": 3000,
      "Task_Completed": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "Task_Created": 2000,      

      "Task_Completed": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "Task_Created": 2780,
      "Task_Completed": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "Task_Created": 7890,
      "Task_Completed": 1800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "Task_Created": 2390,
      "Task_Completed": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "Task_Created": 8490,
      "Task_Completed": 2300,
      "amt": 2100
    }
  ]

  const data6 = [
    {
      name: 'Jan',
      uv: 5090,
      amt: 2000,
      "fill": "#bab4b4"
    },
    {
      name: 'Feb',
      uv: 1568,
      amt: 1506,
      "fill": "#bab4b4"
    },
    {
      name: 'Mar',
      uv: 2897,
      amt: 989,
      "fill": "#bab4b4"
    },
    {
      name: 'Apr',
      uv: 3200,
      amt: 1228,
      "fill": "#bab4b4"
    },
    {
      name: 'May',
      uv: 4020,
      amt: 1100,
      "fill": "#bab4b4"
    },
    {
      name: 'Jun',
      uv: 4400,
      amt: 1700,
      "fill":"#413ea0"
    },
    {
      name: 'Jul',
      uv: 590,
      amt: 1400,
      "fill": "#bab4b4"
    },
    {
      name: 'Aug',
      uv: 868,
      amt: 1506,
      "fill": "#bab4b4"
    },
    {
      name: 'Sep',
      uv: 1397,
      amt: 989,
      "fill": "#bab4b4"
    },
    {
      name: 'Oct',
      uv: 1480,
      amt: 1228,
      "fill": "#bab4b4"
    },
    {
      name: 'Nov',
      uv: 1520,
      amt: 1100,
      "fill": "#bab4b4"
    },
    {
      name: 'Dec',
      uv: 2920,
      amt: 1100,
      "fill": "#bab4b4"
    },
  ];
  
  const data7 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
                            
  return (
    <div>
      <Navbar />
      <div className={styles.mainHomeRightbar}>
        <div>
          <div className={styles.itemContainer}>
            <div className={styles.itemCont1}>
              <div className={styles.subItemContainer}>
                <p className={styles.taskProgress}>Task Proguess</p>
                <p className={styles.taskCounter}>212</p>
                <p className={styles.currentmonth1}>Current Month</p>
              </div>
              <div className={styles.barchartContainer}>
                <BarChart width={166} height={130} data={data}>
                  <Tooltip />
                  <Bar dataKey="uv" fill="fill" />
                </BarChart>
              </div>
            </div>

            <div className={styles.itemCont1}>              
                <div className={styles.subItemContainer}>
                  <p className={styles.taskProgress}>Task Completed</p>
                  <p className={styles.taskCounter1}>301</p>
                  <p className={styles.currentmonth1}>Current Month</p>
              </div>
                <div className={styles.barchartContainer}>
                  <BarChart width={166} height={130} data={data1}>
                    <Tooltip />
                    <Bar dataKey="uv" fill="fill" />
                  </BarChart>
                </div>
            </div>

            <div className={styles.itemCont1}>
              <div className={styles.subItemContainer1}>
                <p className={styles.taskProgress}>Monthly Task Summary</p>
                <p className={styles.taskCounter2}>1294</p>
                <p className={styles.currentmonth1}>Current Month</p>
              </div>
              <div className={styles.barchartContainer}>
                <BarChart width={166} height={130} data={data2}>
                  <Tooltip />
                  <Bar dataKey="uv" fill="fill" />
                </BarChart>
              </div>
            </div>
        </div>

          <div className={styles.middleTaskChart}>
            <p className={styles.taskCreatedCompleted}>Task Created vs Task Completed</p>
            <LineChart width={1375} height={200} data={data4} 
              margin={{ top: 5, right: 30, left: 20, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Task_Created" stroke="#8884d8" />
              <Line type="monotone" dataKey="Task_Completed" stroke="#82ca9d" />
            </LineChart>
          </div>

          <div className={styles.taskContainer}>
            <div className={styles.taskChart}>
              <p className={styles.taskContainerText}>Your Team Performance This Week</p>
              <PieChart width={300} height={200}>
                <Pie
                  data={data7}
                  cx={160}
                  cy={100}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <p className={styles.teamPerformanceText}>Your Team Performance is 5% better then last week</p>
              <button className={styles.viewDetailsBtn}>View Details</button>
            </div>

            <div className={styles.monthlyEarning}>
              <p className={styles.taskContainerText}>Monthly Earning Performance</p>
              <ComposedChart
                width={1000}
                height={320}
                data={data6}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="fill" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </div>
          </div>

      </div>
    </div>
  </div>
  )
}


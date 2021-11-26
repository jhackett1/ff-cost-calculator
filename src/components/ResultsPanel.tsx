import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Panel from "../components/Panel"
import Stats, { Stat } from "../components/Stats"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const ResultsPanel = () => {
  return (
    <Panel title="Cumulative spend forecast" colour="blue">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <CartesianGrid stroke="#f4f4f4" />

          <Area
            type="monotone"
            dataKey="amt"
            fill="#0059ff"
            stroke="#0059ff"
            strokeWidth={0}
          />

          <Line type="monotone" dataKey="uv" stroke="#0059ff" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>

      <Stats>
        <Stat value="£0000" caption="Total spend" />
        <Stat value="£00" caption="Another example caption" />
        <Stat value="??" caption="Example caption" />
        <Stat value="000" caption="Caption here" />
      </Stats>
    </Panel>
  )
}

export default ResultsPanel

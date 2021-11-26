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
    name: "Jun 21",
    spend: 0,
    // range: 0,
  },
  {
    name: "Jun 21",
    spend: 1000,
    // range: [1000, 1000],
  },
  {
    name: "Jul 21",
    spend: 1300,
    range: [1300, 1300],
  },
  {
    name: "Aug 21",
    spend: 2780,
    range: [2000, 3500],
  },
  {
    name: "Sep 21",
    spend: 3090,
    range: [2500, 4000],
  },
  {
    name: "Oct 21",
    spend: 3490,
    range: [2400, 5050],
  },
  {
    name: "Nov 21",
    spend: 3790,
    range: [2200, 5500],
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
            dataKey="range"
            fill="#0059ff"
            stroke="#0059ff"
            strokeWidth={0}
          />

          <Line
            type="monotone"
            dataKey="spend"
            stroke="#0059ff"
            strokeWidth={2}
          />
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

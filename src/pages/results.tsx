// import { useParams } from "react-router-dom"
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Button from "../components/Button"
import ClickToCopy from "../components/ClickToCopy"
import Panel from "../components/Panel"
import Layout from "../components/_Layout"

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

const ResultsPage = () => {
  // const { id } = useParams()

  return (
    <Layout title="Your estimate">
      <Panel title="Cumulative spend forecast" colour="blue">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <CartesianGrid stroke="#f4f4f4" />

            <Area
              type="monotone"
              dataKey="amt"
              fill="#0059ff"
              stroke="#0059ff"
              strokeWidth={0}
            />

            <Line
              type="monotone"
              dataKey="uv"
              stroke="#0059ff"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Panel>

      <Panel colour="glass">
        Some information about things that we assumed during the calculation
      </Panel>

      <Panel title="Share results" colour="yellow">
        <p>Found this useful? Why not share with a colleague:</p>
        <ClickToCopy text={window.location.href} />
        <p>
          Or <a href="/">share by email</a>.
        </p>
      </Panel>

      <Panel title="Download" colour="yellow">
        <p>You can also download your results as a spreadsheet (CSV).</p>
        <Button
          secondary
          icon={
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
              <path
                d="M2.25736 8L6.5 12.2426L10.7426 8"
                stroke="#333333"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 1V12"
                stroke="#333333"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 14L11.5 14"
                stroke="#333333"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Download CSV
        </Button>
      </Panel>
    </Layout>
  )
}

export default ResultsPage

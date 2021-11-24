import Button from "../components/Button"
import Panel from "../components/Panel"
import Layout from "../components/_Layout"

const ResultsPage = () => (
  <Layout title="Your estimate">
    <Panel title="Spend forecast" colour="blue">
      Page
    </Panel>
    <Panel title="Share results" colour="yellow">
      <p>Found this useful? Why not share with a colleague?</p>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.5 1V12"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 14L11.5 14"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      >
        Download CSV
      </Button>
    </Panel>
  </Layout>
)

export default ResultsPage

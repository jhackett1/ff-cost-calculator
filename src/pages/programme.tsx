import Button from "../components/Button"
import Panel from "../components/Panel"
import ProjectList from "../components/ProjectList"
import Layout from "../components/_Layout"

const ProgrammePage = () => (
  <Layout title="Programme of work">
    <Panel>
      <ProjectList />

      <p>Would you like to add another project?</p>
      <Button href="/results">No, get my estimate</Button>
      <Button
        href="/project/new"
        secondary
        icon={
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
            <path
              d="M1 7.24268L12 7.24268"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 1.74268L6.5 12.7427"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Yes, add another
      </Button>
    </Panel>
  </Layout>
)

export default ProgrammePage

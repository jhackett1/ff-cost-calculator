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
      <Button href="/project/new" secondary>
        Yes, add another
      </Button>
    </Panel>
  </Layout>
)

export default ProgrammePage

import Button from "../components/Button"
import Panel from "../components/Panel"
import Layout from "../components/_Layout"

const IndexPage = () => (
  <Layout>
    <Panel>
      <p className="bigText">
        Example demo text goes here. Example demo text goes here. Example demo
        text goes here.
      </p>
      <p className="bigText">Example demo text goes here.</p>
      <Button
        href="/project/new"
        icon={
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <path
              d="M8.37869 9.74264L12.6213 5.5L8.37869 1.25736"
              stroke="#333333"
              stroke-width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.37866 5.5L12.3787 5.5"
              stroke="#333333"
              stroke-width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        Start now
      </Button>
    </Panel>
  </Layout>
)

export default IndexPage

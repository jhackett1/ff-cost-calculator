import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Panel from "../components/Panel"
import RadioPanelField from "../components/RadioPanelField"
import TextField from "../components/TextField"
import Layout from "../components/_Layout"

const ProjectNicknamePage = () => {
  const push = useNavigate()

  return (
    <Layout title="Add a new project">
      <Panel>
        <Formik
          onSubmit={async () => push("/programme")}
          initialValues={{ foo: "" }}
        >
          <Form>
            <TextField name="nickname" label="Nickname" />

            <Button>Next</Button>
          </Form>
        </Formik>
      </Panel>
    </Layout>
  )
}

export default ProjectNicknamePage

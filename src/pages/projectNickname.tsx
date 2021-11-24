import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Panel from "../components/Panel"
import TextField from "../components/TextField"
import Layout from "../components/_Layout"
import { useDraftProject } from "../hooks/useDraftProject"

const ProjectNicknamePage = () => {
  const push = useNavigate()
  const { addToProject, saveToProgramme } = useDraftProject()

  return (
    <Layout title="Add a new project">
      <Panel>
        <Formik
          onSubmit={async values => {
            addToProject(values)
            // TODO: fix this
            // saveToProgramme()
            push("/programme")
          }}
          initialValues={{ nickname: "" }}
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

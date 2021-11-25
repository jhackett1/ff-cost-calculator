import { Form, Formik } from "formik"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Dots from "../components/Dots"
import ErrorSummary from "../components/ErrorSummary"
import Panel from "../components/Panel"
import TextField from "../components/TextField"
import Layout from "../components/_Layout"
import { useDraftProject } from "../hooks/useDraftProject"
import { useProgramme } from "../hooks/useProgramme"
import { projectNicknameSchema } from "../validators"

const ProjectNicknamePage = () => {
  const push = useNavigate()
  const { addAndSaveToProgramme, isEmpty } = useDraftProject()
  const { programme } = useProgramme()

  const defaultNickname = `Project ${programme.projects.length + 1}`

  // return to start if we don't have a wip project
  useEffect(() => {
    if (isEmpty) push("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title="Add a new project">
      <Panel>
        <Formik
          onSubmit={async values => {
            addAndSaveToProgramme({
              nickname: values.nickname || defaultNickname,
            })
            push("/programme")
          }}
          initialValues={{ nickname: "" }}
          validationSchema={projectNicknameSchema}
        >
          {({ isValid }) => (
            <Form>
              <h2>Just a few more questions...</h2>

              <TextField
                name="nickname"
                label="Nickname"
                hint="So you can easily refer to it later"
                placeholder={defaultNickname}
              />

              <ErrorSummary />

              <Button disabled={!isValid}>Next</Button>
            </Form>
          )}
        </Formik>

        <Dots filled={3} unfilled={0} />
      </Panel>
    </Layout>
  )
}

export default ProjectNicknamePage

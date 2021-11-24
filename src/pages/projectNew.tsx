import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Panel from "../components/Panel"
import RadioPanelField from "../components/RadioPanelField"
import Layout from "../components/_Layout"

const ProjectNewPage = () => {
  const push = useNavigate()

  return (
    <Layout title="Add a new project">
      <Panel>
        <Formik
          onSubmit={async () => push("/project/delivery")}
          initialValues={{ foo: "" }}
        >
          <Form>
            <RadioPanelField
              question="First, what kind of work do you want to do?"
              choices={[
                {
                  name: "kind-of-work",
                  label: "Experiment with a new idea",
                  value: "experiment",
                  hint: (
                    <p>
                      The most important thing is learning about a problem
                      space, and trying lots of different solutions, without
                      necessarily reaching production.
                    </p>
                  ),
                },
                {
                  name: "kind-of-work",
                  label: "Build a new live service",
                  value: "build",
                  hint: (
                    <>
                      <p>
                        The most important thing is to provide a tangible,
                        ongoing benefit to residents within a year or two.
                      </p>
                      <p>
                        Building a service that will need to handle real
                        people’s data is always more expensive, but can be more
                        impactful.
                      </p>
                    </>
                  ),
                },
              ]}
              guidance="Stuff goes here"
            />

            <Button>Next</Button>
          </Form>
        </Formik>
      </Panel>
    </Layout>
  )
}

export default ProjectNewPage

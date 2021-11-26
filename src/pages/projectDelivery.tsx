import { Form, Formik } from "formik"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Dots from "../components/Dots"
import ErrorSummary from "../components/ErrorSummary"
import Panel from "../components/Panel"
import RadioPanelField from "../components/RadioPanelField"
import Layout from "../components/_Layout"
import { useDraftProject } from "../hooks/useDraftProject"
import { DeliveryType } from "../types"
import { projectDeliverySchema } from "../validators"

const ProjectDeliveryPage = () => {
  const push = useNavigate()
  const { addToProject, isEmpty } = useDraftProject()

  // return to start if we don't have a wip project
  useEffect(() => {
    if (isEmpty) push("/")
  }, [isEmpty, push])

  return (
    <Layout title="Add a new project">
      <Panel>
        <Formik
          onSubmit={async values => {
            addToProject(values)
            push("/project/nickname")
          }}
          initialValues={{ delivery: undefined }}
          validationSchema={projectDeliverySchema}
        >
          {({ isValid }) => (
            <Form>
              <RadioPanelField
                question="Okay, and how will that work be delivered?"
                choices={[
                  {
                    name: "delivery",
                    label: "With my own staff",
                    value: DeliveryType.InHouse,
                    hint: (
                      <>
                        <p>
                          If you already have the right mix of in-house skills
                          to deliver digital transformation.
                        </p>
                        <p>
                          This is cheaper, but riskier if your staff don’t have
                          much experience conducting large digital projects.
                        </p>
                      </>
                    ),
                  },
                  {
                    name: "delivery",
                    label: "With contractors or an agency",
                    value: DeliveryType.Tender,
                    hint: (
                      <>
                        <p>
                          If you need to supplement your own staff by tendering
                          out to expert freelancers or agency workers.
                        </p>
                        <p>
                          Contractors are always more expensive, but may be
                          necessary if you are early on your transformation
                          journey.
                        </p>
                      </>
                    ),
                  },
                ]}
                guidance="Stuff goes here"
              />

              <ErrorSummary />

              <Button type="submit" disabled={!isValid}>
                Next
              </Button>
            </Form>
          )}
        </Formik>

        <Dots filled={2} unfilled={1} />
      </Panel>
    </Layout>
  )
}

export default ProjectDeliveryPage

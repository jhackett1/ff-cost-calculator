import { Form, Formik } from "formik"
import TextField from "../components/TextField"

const IndexPage = () => (
  <>
    <h1>Index page</h1>

    <Formik onSubmit={async () => null} initialValues={{ foo: "" }}>
      <Form>
        <TextField label="Example input" name="foo" placeholder="eg. 12345" />
      </Form>
    </Formik>
  </>
)

export default IndexPage

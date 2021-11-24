import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./components/_Layout"
import { ProgrammeProvider } from "./contexts/programmeContext"
import IndexPage from "./pages"
import "./styles/index.scss"

const App = () => (
  <ProgrammeProvider>
    <Router>
      <Layout>
        <Routes>
          {/* start */}
          <Route path="/" element={<IndexPage />} />
          {/* project creation flow */}
          <Route path="/project/new" element={<IndexPage />} />
          <Route path="/project/delivery" element={<IndexPage />} />
          <Route path="/project/name" element={<IndexPage />} />
          {/* project list */}
          <Route path="/programme" element={<IndexPage />} />
          {/* shareable results page */}
          <Route path="/results/:shareableKey" element={<IndexPage />} />
        </Routes>
      </Layout>
    </Router>
  </ProgrammeProvider>
)

export default App

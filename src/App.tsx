import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ProgrammeProvider } from "./contexts/programmeContext"
import IndexPage from "./pages"
import ProjectDeliveryPage from "./pages/projectDelivery"
import ProjectNewPage from "./pages/projectNew"
import ProjectNicknamePage from "./pages/projectNickname"
import "./styles/index.scss"

const App = () => (
  <ProgrammeProvider>
    <Router>
      <Routes>
        {/* start */}
        <Route path="/" element={<IndexPage />} />
        {/* project creation flow */}
        <Route path="/project/new" element={<ProjectNewPage />} />
        <Route path="/project/delivery" element={<ProjectDeliveryPage />} />
        <Route path="/project/nickname" element={<ProjectNicknamePage />} />
        {/* project list */}
        <Route path="/programme" element={<IndexPage />} />
        {/* shareable results page */}
        <Route path="/results/:shareableKey" element={<IndexPage />} />
      </Routes>
    </Router>
  </ProgrammeProvider>
)

export default App

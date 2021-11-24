import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { DraftProjectProvider } from "./contexts/daftProjectContext"
import { ProgrammeProvider } from "./contexts/programmeContext"
import IndexPage from "./pages"
import ProgrammePage from "./pages/programme"
import ProjectDeliveryPage from "./pages/projectDelivery"
import ProjectNewPage from "./pages/projectNew"
import ProjectNicknamePage from "./pages/projectNickname"
import ResultsPage from "./pages/results"
import "./styles/index.scss"

const App = () => (
  <ProgrammeProvider>
    <Router>
      <Routes>
        {/* start */}
        <Route path="/" element={<IndexPage />} />
      </Routes>

      {/* project creation flow */}
      <DraftProjectProvider>
        <Routes>
          <Route path="/project/new" element={<ProjectNewPage />} />
          <Route path="/project/delivery" element={<ProjectDeliveryPage />} />
          <Route path="/project/nickname" element={<ProjectNicknamePage />} />
        </Routes>
      </DraftProjectProvider>

      <Routes>
        {/* project list */}
        <Route path="/programme" element={<ProgrammePage />} />

        {/* shareable results page */}
        <Route path="/results/:shareableKey" element={<ResultsPage />} />
      </Routes>
    </Router>
  </ProgrammeProvider>
)

export default App

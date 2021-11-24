import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ProgrammeProvider } from "./contexts/programmeContext"
import IndexPage from "./pages"
import "./styles/index.scss"

const App = () => (
  <ProgrammeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/project" element={<IndexPage />} />
        <Route path="/results/:key" element={<IndexPage />} />
      </Routes>
    </Router>
  </ProgrammeProvider>
)

export default App

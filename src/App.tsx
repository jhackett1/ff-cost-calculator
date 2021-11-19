import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import IndexPage from "./pages"
import "./styles/index.scss"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  </Router>
)

export default App

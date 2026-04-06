import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Home from "./pages/Home"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import FAQ from "./pages/FAQ"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Support from "./pages/Support"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Home />} /> {/* Redirect download to home for now as simpler alternative */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

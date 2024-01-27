import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Projects,
  Contact,
  ErrorPage,
  Navigation,
} from "./components/";

function App() {
  return (
    <Router>
      <Navigation />         
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;

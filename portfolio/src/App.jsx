import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sass/main.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Home,
  Projects,
  ProjectDetail,
  Contact,
  ErrorPage, 
  SharedLayout,
} from "./components/";

function App() {
  return (
    <Router>    
      <Routes>
        {/* SharedLayout is used as a layout wrapper for all routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />

          {/* ProjectDetail route with dynamic parameter 'id' */}
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />

          {/* Catch-all route for any unmatched paths */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>    
  )
}

export default App;

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
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>    
  )
}

export default App;

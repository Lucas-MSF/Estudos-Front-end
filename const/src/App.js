import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Company from './components/pages/Company.js';
import Home from './components/pages/Home.js';
import Projects from './components/pages/Projects.js';
import NewProject from './components/pages/NewProject.js';
import Contact from './components/pages/Contact.js';
import Container from './components/layout/Container.js';
import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer />
     </Router>
    </div>
  );
}

export default App;

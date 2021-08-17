import Header from './components/Header/Header';
import './App.css';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  
  return (
    <Router>
    <div >
       <Header/>
     <Section/>
     <Footer/>
  
      </div>
      </Router>
  );
}

export default App;

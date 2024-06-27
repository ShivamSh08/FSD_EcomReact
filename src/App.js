import logo from './logo.svg';
import './App.css';
// import style from './components/style.css'
import NavAbout from './components/NavAbout';
import Services from './components/Services';
import About from './components/About';
import Books from './components/Books';
import Arrivals from './components/Arrivals';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <NavAbout/>
      <Login/>
      <Services/>
      <About/>
      <Books/>
      <Arrivals/>
      <Reviews/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

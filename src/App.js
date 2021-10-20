import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextFoem';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils"/> */}
    <div className="container my-3">
    {/* <TextForm heading="Enter text here to analyse"/> */}
    <AboutUs/>
    </div>
    </>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const Title = "Era Love Napoleon";
 // const Heart = "1 Million";
 // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;

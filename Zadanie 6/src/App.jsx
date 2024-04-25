import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='App_container'>
        <h2>React shop</h2>
        <p>Great prices!</p>
        <Link to="/products" className="App_link">Chect our products</Link>
      </div>
    </div>
  );
}

export default App;

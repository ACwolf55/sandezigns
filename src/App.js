
import './App.css';
import { Blog } from './Components/Blog';
import { Artwork } from './Components/Artwork';
import { About } from './Components/About';
import { Photography } from './Components/Photography';

function App() {
  return (
    <div className="App">
      <About/>
      <Artwork/>
      <Photography/>
      <Blog/>
    </div>
  );
}

export default App;

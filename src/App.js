
import './App.css';
import MemoryCard from './Components/MemoryCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Memory Game </h1>
        <h3> Match cards to win! </h3>
      </header>
      <br />
      <br />
      <br />
      <div class="row">
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       </div>
       <div class="row">
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       </div>
       <div class="row">
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       </div>
       <div class="row"> 
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       <MemoryCard />
       </div>

    </div>
    
  );
}

export default App;

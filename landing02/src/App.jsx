// import HeroSection from "./Hero";
import StudentCard from "./StudentCard";
import LogStatusBox from "./LogStatusBox";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
      </header>
    </div>
    <StudentCard name="John Doe"  address="123 Main St" />
    <StudentCard name="Jane Doe" age={25} address="456 Elm
    St" />
    <StudentCard name="John Smith" />
    <LogStatusBox status={true} />
 
    </>
    
  );
}

export default App;
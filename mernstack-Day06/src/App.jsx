import Navbar from './Components/FunctionalComponents/Navbar.jsx'
import './css/App.css'
import ClassComponents from './Components/ClassComponents/ClassComponents.jsx'
function App() {
  const h1Style={
    backgroundColor:"violet",
    color:"white",
    textAlign:"center"
  }
  return (
    <header>
      <Navbar />
        <div>
          <h1 style={h1Style}>Welcome to Derry</h1>
          <h2 className="h2">This is simple react</h2>
          <ClassComponents/>
          <img src="vite.svg" alt="" style={{marginLeft: "650px",height:"350px"}} />
         
        </div>
    </header>
  );
}
export default App
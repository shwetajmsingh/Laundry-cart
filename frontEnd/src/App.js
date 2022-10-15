import "./App.css";
import About from "./Components/About/About";
import Copywrite from "./Components/Copywrite/Copywrite";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <About /> */}
      <Copywrite />
    </div>
  );
}

export default App;

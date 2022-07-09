import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//pages
import Article from "./pages/Article"
import Articles from "./pages/Articles";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//components
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
    <NavBar />
    <div className='max-w-screen-md mx-auto pt-20  '>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Articles" element={<Articles />}/>
        <Route exact path="/Article/:name" element={<Article />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
    </Router>
  )}
export default App;

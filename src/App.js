import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskPage from "./components/TaskPage";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" comp={Home} />
          <Route path="/taskpage" comp={TaskPage} />
        </Routes>
      </Router>
    </div>
  );
}

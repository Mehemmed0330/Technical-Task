import './App.css';
import Add from "./components/Add"
import Books from "./components/Books"
import Menu from "./components/Menu"
import Update from "./components/Update"
import { Routes, Route } from "react-router-dom"
import "./css/reset.css"

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/books" element={<Books />} />
        <Route path="/update:id" element={<Update />} />
      </Routes>

    </div>
  );
}

export default App;

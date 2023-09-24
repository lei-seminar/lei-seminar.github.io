import './App.css';
import ReadingList from "./pages/readingList";
import Presentations from "./pages/presentations";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./utils/navbar";
function App() {
  return (
       <>
           <h1 style={{marginLeft: "2em", marginTop: "1em"}}> CSE 259: Large Language Models - Reading Group</h1>
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/' exact element={<Presentations />} />
                  <Route path='/readinglist' element={<ReadingList />} />
                  <Route path='/presentation' element={<Presentations />} />
              </Routes>
          </Router>
      </>

  );
}

export default App;

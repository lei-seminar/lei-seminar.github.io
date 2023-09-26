import './App.css';
import React, { Suspense, lazy } from 'react';
import ReadingList from "./pages/readingList";
import Presentations from "./pages/presentations";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./utils/navbar";
function App() {
    const NotFound = lazy(() => import('./pages/notfound'));
  return (
       <>
           <Router>
               <Suspense fallback={<Presentations />}>
                  <Navbar />
                  <Routes>

                          <Route exact path='/'  element={<Presentations/>} />
                          <Route path='/readinglist' element={<ReadingList/>} />
                          <Route path='/presentation' element={<Presentations/>} />
                          <Route component={NotFound} status={404} />

                  </Routes>
               </Suspense>
          </Router>
      </>

  );
}

export default App;

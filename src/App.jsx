import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Page1 from './Pages/page_1.jsx'
import Page2 from './Pages/page_2.jsx'

function App() {

  return (
    <div className='App'>
      <h1>Tugas Modul 5 | Kelompok 37</h1>
      <Router>
        <div style={{display:'flex', alignItems:'flex-start'}}>
          <p style={{paddingLeft:'300px'}}></p>
          <p style={{marginRight:'10px'}}><Link to="/1">Page 1</Link></p>
          <p style={{marginLeft:'10px'}}><Link to="/2">Page 2</Link></p>
        </div>
        <Routes>
          <Route path='/' exact element={<Page1 />}></Route>
          <Route path='/1' exact element={<Page1 />}></Route>
          <Route path='/2' exact element={<Page2 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
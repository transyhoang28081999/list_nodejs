import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Add from './components/Add'
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Routes>
            <Route path=''>
              <Route index element={<Employees />} />
              <Route path='/:id' element={<Add />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  )
}

export default App;

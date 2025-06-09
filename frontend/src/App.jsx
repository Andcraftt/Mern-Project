import './index.css'
import {Routes , Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
    return (
        <>
        
              <div className="container">
                  <Header></Header>
                  <Routes>
                      <Route path = '/' element={<Dashboard />}/>
                      <Route path = '/login' element={<Login />}/>
                      <Route path = '/register' element={<Register />}/>
                  </Routes>
              </div>
           
        </>
    )
}

export default App

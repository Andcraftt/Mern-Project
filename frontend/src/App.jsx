import './index.css'
import { BrowserRouter as Routes , Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
    return (
        <>
        
              <div className="container">
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


import './App.css'
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './files/register';
import Delete from './files/delete';
import Dashboard from './files/dash';
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </Router>
    </>
  )
  
}

export default App

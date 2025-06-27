import WelcomePage from './pages/WelcomePage.tsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>} />
    </Routes>
  )
}

export default App;

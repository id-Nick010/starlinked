import Layout from './layout/Layout.tsx';
import CreateSpace from './pages/CreateSpace.tsx';
import WelcomePage from './pages/WelcomePage.tsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/createSpace' element={<CreateSpace/>} />
      </Route>
    </Routes>
  )
}

export default App;

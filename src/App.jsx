import { Outlet  } from 'react-router-dom';
import Nav from './compoenents/nav'
import './index.css'
function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App

import { PageA } from './pages/PageA'
import { PageB } from './pages/PageB'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  // const { y } = UseScrollTop()
  // const { local, setLocal } = UseStoreLocal('name', '金居哇！')
  // console.log("local", local);
  // setTimeout(() => {
  //   setLocal('秀妍哇！')
  // }, 2000);
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/a'>go PageA</Link>
        <Link to='/b'>go PageB</Link> 
        <Routes>
          <Route path='/a' element={<PageA />}></Route>
          <Route path='/b' element={<PageB />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

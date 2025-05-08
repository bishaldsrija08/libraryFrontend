import { Routes, BrowserRouter, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>This is Homepage.</h1>} />
        <Route path='/about' element={<h1>This is about page.</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
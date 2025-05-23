import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage'
import EditPage from './pages/EditPage'
import CreatePage from './pages/CreatePage'
function App() {
    console.log("helllo")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                export default SinglePage
                <Route path="/single/:id" element={<SinglePage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
// import router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import delle pagine 
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ListProducts from './pages/ListProducts'

// import del layout(default)
import DefaultLayout from './layout/DefaultLayout'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/chisiamo" element={<AboutUs />} />
            <Route path="/prodotti" element={<ListProducts />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

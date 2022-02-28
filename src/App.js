import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/productDetailPage'
import ProductCollectionPage from './pages/productCollectionPage'
import CreateProductPage from './pages/adminPage/CreateProductPage'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/createproduct" element={<CreateProductPage />} />
          <Route path="/collection/:typeProduct" element={<ProductCollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

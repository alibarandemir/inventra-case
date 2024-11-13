
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import Hero from './components/Hero/Hero'
import Recommendations from './components/Recommendations/Recommendations'
import NewProduct from './components/NewProduct/NewProduct'
import ProductsForConcerns from './components/ProductsForConcerns/ProductsForConcerns'
import Dermatologists from './components/Dermatologists/Dermatologists'
import SkinAnalyze from './components/SkinAnalyze/SkinAnalyze'
import { AppProvider } from './Context/AppContext'
import Results from './components/Results/Results'
import Articles from './components/Articles/Articles'

function App() {
  

  return (
    <>
    <AppProvider>
      <Navbar/>
      <Hero/>
      <Recommendations/>
      <NewProduct/>
      <ProductsForConcerns/>
      <Dermatologists/>
      <SkinAnalyze/>
      <Results/>
      <Articles/>
      </AppProvider>
    </>
  )
}

export default App

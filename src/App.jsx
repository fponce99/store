import './App.css'
import { Navbar } from './components/Navbar'
import { SearchProvider } from './contexts/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Navbar />
    </SearchProvider>
  )
}

export default App

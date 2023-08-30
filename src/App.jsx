import './App.css'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { SearchProvider } from './contexts/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Navbar />
      <ResultInfoBar />
    </SearchProvider>
  )
}

export default App

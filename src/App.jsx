import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { SearchProvider } from './contexts/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Navbar />
      <ResultInfoBar />
      <Filter/>
    </SearchProvider>
  )
}

export default App

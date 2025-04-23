import FilterArea from "./components/filterArea"
import Navbar from "./components/navbar"
import Places from "./components/places"
import Searchbar from "./components/searchbar"

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <FilterArea/>
      <Places/>
    </>
  )
}

export default App
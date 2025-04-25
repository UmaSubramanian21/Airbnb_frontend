import FilterArea from "./components/filterArea"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Places from "./components/places"



import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <>
      <Navbar />
      <FilterArea />
      <Places />
      <Footer />
     
    </>
  )
}

export default App
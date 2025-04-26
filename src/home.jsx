// Dashboard all components are here

// Date file setup for seaech component date style
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Navbar from "./components/navbar"
import FilterArea from './components/filterArea'
import Places from './components/places'
import Footer from './components/footer'

function Home() {
    return (
        <>
            <Navbar />
            <FilterArea />
            <Places />
            <Footer />
        </>
    )
}

export default Home
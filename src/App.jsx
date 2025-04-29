import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./home";
import HostEarningsEstimator from "./components/menu__Components/HostYourHome";
import AskSuperhost from "./components/menu__Components/Ask_a_host";
import Airbnb__setUp from "./components/menu__Components/airbnb__setup";
import PropertyPage from "./components/menu__Components/Reservation__Component/PropertyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/host-your-home" element={<HostEarningsEstimator />}></Route>
          <Route path="/airbnb-setup" element={<Airbnb__setUp />}></Route>
          <Route path="/ask-a-host" element={<AskSuperhost />}></Route>
          <Route path="/reserve" element={<PropertyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
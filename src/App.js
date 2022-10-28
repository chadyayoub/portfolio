import { Routes, Route, createRoutesFromElements } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import NavBar from "./components/organisms/navBar/navBar";
// import routeNames from "./routesNames";
import About from "./pages/about/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

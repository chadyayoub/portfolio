import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import NavBar from "./components/organisms/navBar/navBar";
import routeNames from "./routesNames";
import Contact from "./pages/contact/contact";
import MyWork from "./pages/myWork/myWork";

function App() {
  return (
    <>
      <Routes>
        <Route path={routeNames.home} element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route path={routeNames.contact} element={<Contact />} />
          <Route path={routeNames.myWork} element={<MyWork />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

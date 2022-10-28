import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import NavBar from "./components/organisms/navBar/navBar";
// import routeNames from "./routesNames";
import About from "./pages/about/about";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={() => <LandingPage />}>
      <Route path="/about" element={() => <About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import HeroPage from "./pages/HeroPage";
import Topbar from "./pages/Topbar";
import About from "./pages/About";
import Destination from "./pages/destination/Destination";

function App() {
  return (
    <>
      <Topbar />
      <HeroPage />
      {/* {isLoggedIn && <UserOption />} */}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

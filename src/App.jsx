import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import HeroPage from "./pages/HeroPage";
import Topbar from "./pages/Topbar";
import About from "./pages/About";
import Destination from "./pages/destination/Destination";
import { useDispatch, useSelector } from "react-redux";
import UserOption from "./pages/user/UserOption";
import { loginUser } from "./store/authSlice";

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

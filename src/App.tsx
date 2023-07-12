import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./Main";
import Guitars from "./components/categories/Guitars";
import CatalogLayout from "./layout/CatalogLayout";
import ServiceProfile from "./components/service-profile/ServiceProfile";
import UserProfile from "./components/user-profile/UserProfile";
import Pianists from "./components/categories/Pianists";
import Drums from "./components/categories/Drums";
import Vocals from "./components/categories/Vocals";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>

          <Route path="/category" element={<CatalogLayout />}>
            <Route path="guitars" element={<Guitars />} />
            <Route path="pianists" element={<Pianists />} />
            <Route path="drums" element={<Drums />} />
            <Route path="vocals" element={<Vocals />} />
          </Route>

          <Route path="/service-profile" element={<ServiceProfile />} />

          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;

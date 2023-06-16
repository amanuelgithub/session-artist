// import Home, { BaseHome } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./Main";
import Guitar from "./components/categories/Guitar";
import CatalogLayout from "./layout/CatalogLayout";
import ServiceProfile from "./components/service-profile/ServiceProfile";
import UserProfile from "./components/user-profile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="/category" element={<CatalogLayout />}>
          <Route path="guitar" element={<Guitar />} />
        </Route>

        <Route path="/service-profile" element={<ServiceProfile />} />

        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

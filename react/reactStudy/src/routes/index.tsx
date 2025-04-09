import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailPage";
import NotFoundPage from "../pages/not-found";

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/detail/:id" element={<DetailPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;

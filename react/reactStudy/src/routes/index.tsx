import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";

import NotFoundPage from "../pages/not-found";
import { lazy, Suspense } from "react";
import AboutPage from "../pages/aboutPage";

const DetailPage = lazy(() => import("../pages/detailPage"));
const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route
      path="/detail/:id"
      element={
        <Suspense fallback={<div>로딩중</div>}>
          <DetailPage />
        </Suspense>
      }
    />
    <Route path="/about" element={<AboutPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;

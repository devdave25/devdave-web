import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

const HOME_PAGE = "/";

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

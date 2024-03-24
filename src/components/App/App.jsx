import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layouts";

const MainPage = lazy(() => import("pages/Main"));
const AboutPage = lazy(() => import("pages/About"));
const ResumePage = lazy(() => import("pages/Resume"));
const ProjectsPage = lazy(() => import("pages/Projects"));
const NotFoundPage = lazy(() => import("pages/NotFound"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

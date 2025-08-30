import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Scroll from "./layouts/scrolltoup";

// Lazy load components
const HomePage = lazy(() => import("./routes/homepage"));
const ProjectDetails = lazy(() => import("./pages/detailsproject"));
const CertificateDetails = lazy(() => import("./pages/detailscertificate"));

export default function App() {
  return (
    <div className="relative">
      <Suspense
        fallback={<p className="text-center mt-10 text-gray-500">Loading...</p>}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/details/project/:projectId"
            element={<ProjectDetails />}
          />
          <Route
            path="/details/certificate/:certificateId"
            element={<CertificateDetails />}
          />
        </Routes>
      </Suspense>

      <Scroll />
    </div>
  );
}

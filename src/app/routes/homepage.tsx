import { useUserdata } from "@/shared/components/firestore";
import { lazy, Suspense } from "react";
import Nav from "../layouts/nav";
import Footer from "../pages/footer";

// Lazy loaded components
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Education = lazy(() => import("../pages/education"));
const Skills = lazy(() => import("../pages/skills"));
const Technology = lazy(() => import("../pages/technology"));
const Projects = lazy(() => import("../pages/projects"));
const Courses = lazy(() => import("../pages/courses"));
const Experience = lazy(() => import("../pages/experience"));
const FreeContents = lazy(() => import("../pages/freecontent"));
const Certificates = lazy(() => import("../pages/certificates"));
const Videos = lazy(() => import("../pages/videos"));
const Contact = lazy(() => import("../pages/contact"));

export default function HomePage() {
  const { isLoading, error, data } = useUserdata();

  if (isLoading)
    return (
      <div className="text-center mt-10 text-[#25c1dd] text-2xl animate-pulse">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-10 text-red-500 text-2xl animate-pulse">
        Error happened!
      </div>
    );

  return (
    <>
      <Nav />
      <Suspense
        fallback={
          <div className="text-center mt-10 text-gray-400">Loading...</div>
        }
      >
        <Home />
        <About />
        {data?.education && data.education.length > 0 && <Education />}
        {data?.skills && data.skills.length > 0 && <Skills />}
        {data?.technologiesAndTools && data.technologiesAndTools.length > 0 && (
          <Technology />
        )}
        {data?.projects && data.projects.length > 0 && <Projects />}
        {data?.courses && data.courses.length > 0 && <Courses />}
        {data?.experiences && data.experiences.length > 0 && <Experience />}
        {data?.contentsTitle && data.contentsTitle.length > 0 && (
          <FreeContents />
        )}
        {data?.certificates && data.certificates.length > 0 && <Certificates />}
        {data?.videos && data.videos.length > 0 && <Videos />}
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

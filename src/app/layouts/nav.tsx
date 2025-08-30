import { useUserdata } from "@/shared/components/firestore";
import { ThemeToggler } from "@/shared/components/theme-toggler";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { data } = useUserdata();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string,
  ) => {
    e.preventDefault();
    setActiveSection(section);
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "courses",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#2e2d2d] shadow-sm overflow-x-hidden">
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="text-[#25c1dd] text-md md:text-base font-medium whitespace-nowrap">
              {data?.userName || "..."}
            </div>
          </div>

          <div className="hidden sm:block w-full">
            <div className="flex justify-center flex-wrap gap-x-3 md:gap-x-6">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleSmoothScroll(e, section)}
                  className={`capitalize px-2 md:px-3 py-2 text-sm md:text-base font-medium transition-all duration-300 border-b-2
                    ${
                      activeSection === section
                        ? "border-[#006a6a] text-[#006a6a]"
                        : "border-transparent hover:border-[#006a6a] hover:text-[#006a6a]"
                    }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-2 md:ml-4">
            <ThemeToggler />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden px-4 py-2 w-full overflow-x-hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className={`block capitalize px-3 py-2 text-base font-medium border-b-2
                transition-all duration-300 
                ${
                  activeSection === section
                    ? "border-[#006a6a] text-[#006a6a]"
                    : "border-transparent hover:border-[#006a6a] hover:text-[#006a6a]"
                }`}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;

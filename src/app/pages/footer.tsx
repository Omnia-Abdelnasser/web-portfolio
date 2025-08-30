const Footer = () => {
  return (
    <footer className="w-full bg-secondary pt-20 bg-[#1e1e1e] text-center">
      <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-lg">
        &copy; <span className="text-[#006a6a] font-semibold">2025</span> Made
        by{" "}
        <a
          href="https://www.linkedin.com/in/omniya-abdelnasser-214484355/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25c1dd] font-semibold hover:underline"
        >
          Omniya Abdelnasser
        </a>
        <span className="font-semibold"> & </span>
        <a
          href="https://www.linkedin.com/in/abdallah-alqiran/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25c1dd] font-semibold hover:underline"
        >
          Abdallah Alqiran
        </a>
      </p>
    </footer>
  );
};

export default Footer;

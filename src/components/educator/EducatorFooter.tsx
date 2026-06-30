import { Link } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";

const EducatorFooter = () => {
  return (
    <footer
      className="
      dir w-full bg-gray-900 px-4 sm:px-10 md:px-14 lg:px-36 py-6 grid  grid-cols-1 md:grid-cols-3 items-center gap-6">
      {/* Logo */}
      <Link
        to="/"
        className="justify-self-center md:justify-self-start"
      >
        <img
          src='/src/assets/logo-dark.png'
          alt="Logo"
          className="w-36"
        />
      </Link>

      {/* Social */}
      <div
        className=" flex justify-center items-center gap-4">
        <a
          href="https://www.instagram.com/mohammadjahann/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-white text-3xl hover:text-cyan-100 transition" />
        </a>

        <a
          href="https://github.com/mohammadjahann"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-white text-3xl hover:text-cyan-100 transition" />
        </a>
      </div>

      {/* Copyright */}
      <p
        className=" text-white/60 text-xs md:text-sm text-center md:text-left md:justify-self-end ">
        Copyright 2026 - Design with ❤ by Jahan
      </p>
    </footer>
  );
};

export default EducatorFooter;
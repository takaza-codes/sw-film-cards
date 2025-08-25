import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-stone-50 py-4">
    <div className="mx-auto px-4 text-center text-sm text-stone-600">
      © {new Date().getFullYear()}
      <p>Elena Kovalenko </p>
      <a
        href="https://github.com/takaza-codes"
        className="underline font-bold hover:text-teal-700">
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;

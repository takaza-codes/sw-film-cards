import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-stone-50 py-4 mt-8">
    <div className="mx-auto px-4 text-center text-sm text-stone-600">
      © {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;

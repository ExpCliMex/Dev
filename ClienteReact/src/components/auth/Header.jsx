import React from 'react';

function Header({ children }) {
  return <h5 className="text-muted fw-normal mb-4">
    {children}
  </h5>;
};

export { Header };

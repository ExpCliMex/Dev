import React from 'react';

function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper full-page">
        <div className="page-content d-flex align-items-center justify-content-center">
          <div className="row w-100 mx-0 auth-page">
            <div className="col-md-8 col-xl-6 mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Layout }

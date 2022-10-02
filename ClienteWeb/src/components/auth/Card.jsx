import React from 'react';

function Card({ children }) {
  return (
    <div className="card">
      <div className="row">
        {children}
      </div>
    </div>
  )
}

function CardSide({ children }) {
  return (
    <div className="col-md-4 pe-md-0">
      <div className="auth-side-wrapper">
        {children}
      </div>
    </div>
  )
}

function CardContent({ children }) {
  return (
    <div className="col-md-8 ps-md-0">
      <div className="auth-form-wrapper px-4 py-5">
        {children}
      </div>
    </div>
  )
}

export { Card, CardSide, CardContent }

import React from 'react';

function Button({ className, ...props }) {
  className = `btn ${className}`;
  return <button type='button' className={className} {...props} />
}

export { Button }

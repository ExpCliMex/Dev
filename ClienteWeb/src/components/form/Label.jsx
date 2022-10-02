import React from 'react';
import { getLabel } from '../../utils/i18n/labels'

function Label({ children, htmlFor, className = 'form-label' }) {
  const labelText = getLabel({ labelId: htmlFor }) || children;
  return <label htmlFor={htmlFor} className={className}>
    {labelText}
  </label>
}

export { Label };

import React from 'react';
import { getLabel } from '../../utils/i18n/labels'
import { useTranslation } from 'react-i18next';

function Label({ children, htmlFor, className = 'form-label' }) {
  const labelText = getLabel({ labelId: htmlFor }) || children;
  const { t } = useTranslation();

  return <label htmlFor={htmlFor} className={className}>
    {t(htmlFor)}
  </label>
}

export { Label };

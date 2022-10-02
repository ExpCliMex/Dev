import React from 'react';
import { getLabel } from '../../utils/i18n/labels';
import { FormControl } from "./FormControl";

function Submit({inputClassName = "btn btn-primary", id }) {
  const value = getLabel({labelId: id})
  return <FormControl>
    <input
      type="submit"
      value={value}
      className={inputClassName}
    />
  </FormControl>
}

export { Submit };

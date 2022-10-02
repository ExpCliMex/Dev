import { Fragment, React } from 'react';
import { TextField } from './TextField';
import { CheckboxField } from './CheckboxField'
import { Submit } from './Submit';
import { SelectField } from './SelectField';

const currentFields = {
  text: TextField,
  checkbox: CheckboxField,
  password: TextField,
  email: TextField,
  submit: Submit,
  select: SelectField
}

function FormWrapper({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

function FormRenderer({ fields }) {
  return (
    <>
      {fields.map((field, index) => {
        const FieldComponent = currentFields[field.type] || Fragment;
        return <FieldComponent key={field.id || index} {...field} />;
      })}
    </>
  )
}

export { FormRenderer, FormWrapper };

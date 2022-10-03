import { FormControl } from "./FormControl";
import { Label } from "./Label";

function SelectField({
  id,
  inputClassName = 'form-select',
  labelText = '',
  formControlClassName = '',
  defaultValue = '',
  data
}) {
  return <FormControl className={formControlClassName}>
    <Label htmlFor={id} className="form-label">
      {labelText}
    </Label>
    <select
      defaultValue={defaultValue}
      className={inputClassName}
      id={id}
      name={id}
    >
      {data.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </FormControl>
};

export { SelectField };

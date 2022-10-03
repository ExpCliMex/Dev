import { FormControl } from "./FormControl";
import { Label } from "./Label";

function CheckboxField({
  id,
  inputClassName = 'form-check-input',
  labelText = '',
  formControlClassName = ''
}) {
  formControlClassName = `${formControlClassName} form-check`
  return <FormControl className={formControlClassName}>
    <input
      type="checkbox"
      id={id}
      name={id}
      className={inputClassName}
    />
    <Label htmlFor={id} className="form-check-label">
      {labelText}
    </Label>
  </FormControl>
};

export { CheckboxField };

import { FormControl } from "./FormControl";
import { Label } from "./Label";

function TextField({ id, type = 'text', inputClassName = 'form-control', placeholder = '', labelText = '',
  autoComplete = "", formControlClassName = '', value = '' }) {

  if (value != undefined && value != "") {
    return <FormControl className={formControlClassName}>
      <Label htmlFor={id}>
        {labelText}
      </Label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
        value={value}
      />
    </FormControl>
  } else {
    return <FormControl className={formControlClassName}>
      <Label htmlFor={id}>
        {labelText}
      </Label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
      />
    </FormControl>
  }
};

export { TextField };

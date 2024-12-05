import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import Switch from "./Switch";
import DateInput from "./DateInput";
import ValidationMessage from "./ValidationMessage";

const FormField = ({ field, value, onChange }) => {
  const renderField = () => {
    switch (field.type) {
      case "text":
        return <TextInput {...field} value={value} onChange={onChange} />;
      case "textarea":
        return <TextArea {...field} value={value} onChange={onChange} />;
      case "select":
        return <Select {...field} value={value} onChange={onChange} />;
      case "checkbox":
        return <CheckboxGroup {...field} value={value} onChange={onChange} />;
      case "radio":
        return <RadioGroup {...field} value={value} onChange={onChange} />;
      case "switch":
        return <Switch {...field} value={value} onChange={onChange} />;
      case "date":
        return <DateInput {...field} value={value} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={field.name}>{field.label}</label>
      {renderField()}
      {field.validation && field.validation.error && (
        <ValidationMessage message={field.validation.error} />
      )}
    </div>
  );
};

export default FormField;

import  { useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Select from "./Select";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import Switch from "./Switch";
import DateInput from "./DateInput";
import Button from "./Button";
import { formConfig } from "../config/formConfig";

const FormContainer = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formConfig.forEach((field) => {
      if (field.validation?.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted", formData);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {formConfig.map((field) => {
        const FieldComponent = {
          text: TextInput,
          textarea: TextArea,
          select: Select,
          checkboxGroup: CheckboxGroup,
          radioGroup: RadioGroup,
          switch: Switch,
          date: DateInput,
        }[field.type];
        return (
          <FieldComponent
            key={field.name}
            {...field}
            value={formData[field.name] || ""}
            error={errors[field.name]}
            onChange={(value) => handleChange(field.name, value)}
          />
        );
      })}
      <Button label="Submit" type="submit" />
    </form>
  );
};

export default FormContainer;

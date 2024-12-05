export const formConfig = [
    {
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      name: "name",
      validation: { required: true, minLength: 3, maxLength: 30 },
    },
    {
      type: "textarea",
      label: "Message",
      placeholder: "Type your message",
      name: "message",
      validation: { required: true, minLength: 10 },
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: ["India", "USA", "UK", "Australia"],
      validation: { required: true },
    },
    {
      type: "checkboxGroup",
      label: "Hobbies",
      name: "hobbies",
      options: ["Reading", "Gaming", "Traveling", "Cooking"],
    },
    {
      type: "radioGroup",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female", "Other"],
      validation: { required: true },
    },
    {
      type: "switch",
      label: "Subscribe to Newsletter",
      name: "subscribe",
    },
    {
      type: "date",
      label: "Date of Birth",
      name: "dob",
      validation: { required: true },
    },
  ];
  
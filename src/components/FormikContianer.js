import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContianer() {

    const dropdownOptions=[
        {
            key:"select an option",value:""
        },
        {key:"Option 1", value: "Option 1"},
        {key:"Option 2", value: "Option 2"},
        {key:"Option 3", value: "Option 3"},

      ]
  const initialValues = {
    email: "",
    description: "",
    selectOption:""
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {console.log("form data", values);}
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
           <FormikControl
            control="select"
            label="Selet a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContianer;

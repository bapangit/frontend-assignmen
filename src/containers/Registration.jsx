import React from "react";
import { Formik, Form } from "formik";
import Text from "../components/Form/Fields/Text";
import TextArea from "../components/Form/Fields/TextArea";
import Select from "../components/Form/Fields/Select";
import Button from "../components/Button";
export default function Registration() {
  return (
    <div>
      <Formik
        initialValues={{
          username: "user",
          password: "",
          email: "",
          message: "",
          country: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div
            style={{
              padding: "20px",
              border: "1px solid #e4e4e4",
              borderRadius: "8px",
              marginTop: "40px",
            }}
            className="container-sm"
          >
            <Text name="username" label="User Name" required />
            <text name="password" label="Password" required />
            <Text name="email" label="Email" required />
            <TextArea name="message" label="Message" rows={2} required />
            <Select
              name="country"
              label="Country"
              options={["india", "nepal", "chaina"]}
              required
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

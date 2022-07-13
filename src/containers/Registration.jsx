import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../components/Form/Fields/Text";
import TextArea from "../components/Form/Fields/TextArea";
import Select from "../components/Form/Fields/Select";
import Button from "../components/Button";

const placeData = [
  {
    countryName: "india",
    states: [
      { name: "maharastra", cities: ["mumbai", "nasik"] },
      { name: "punjab", cities: ["jalandhar", "ludhiana", "mohali"] },
    ],
  },
  {
    countryName: "nepal",
    states: [
      { name: "karnali", cities: ["jumla", "simikot"] },
      { name: "lumbini", cities: ["tansen", "butwal"] },
    ],
  },
];

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Name field is required"),
  email: Yup.string()
    .email("Email address is not valid")
    .required("Email field is required"),
  mobile: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  country: Yup.string().max(50, "Length is Too Long!"),
  state: Yup.string().max(50, "Length is Too Long!"),
  city: Yup.string().max(50, "Length is Too Long!"),
  message: Yup.string().max(100, "Length is Too Long!"),
});
export default function Registration() {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  useEffect(() => {}, [country, state]);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          country: "",
          state: "",
          city: "",
          message: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
          window.alert(JSON.stringify(values));
          console.log(values);
        }}
      >
        <Form>
          <div className="container-sm form-container">
            <Text name="name" label="Name" />
            <Text name="email" label="Email" />
            <Text name="mobile" label="Mobile" />

            {/* Country */}
            <Select
              name="country"
              label="Country"
              options={placeData.map((val) => {
                return val.countryName;
              })}
              onChange={(val) =>
                setCountry(
                  placeData.find((data) => {
                    return data.countryName === val;
                  })
                )
              }
              val={country ? country.countryName : ""}
            />

            {/* State */}
            <Select
              name="state"
              label="State"
              options={country && country.states.map((val) => val.name)}
              onChange={(val) => {
                let stateData = {};
                if (country && val) {
                  stateData = country.states.find((data) => data.name === val);
                }
                stateData && setState(stateData);
              }}
              val={state ? state.name : ""}
            />

            {/* City */}
            <Select
              name="city"
              label="City"
              options={country && state && state.cities}
              onChange={(val) => {
                val && setCity(val);
              }}
              val={city}
            />
            <TextArea name="message" label="Message" rows={5} />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

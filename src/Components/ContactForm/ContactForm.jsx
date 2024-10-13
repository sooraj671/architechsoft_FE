import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const contactSchema = Yup.object({
  firstName: Yup.string()
    .min(4)
    .max(35)
    .required("please enter your first name"),
  lastName: Yup.string().min(4).max(35).required("please enter your last name"),
  email: Yup.string().email().required("please enter your email"),
  phone: Yup.string().min(6).max(15).required("please enter your phone number"),
  state: Yup.string().min(3).max(30).required("please enter your state"),
  company: Yup.string().min(4).max(35).required("please enter company"),
});

const ContactForm = () => {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        company: "",
      },
      validationSchema: contactSchema,
      onSubmit: (values) => {
        const myForm = new FormData();
        myForm.set("firstName", values.firstName);
        myForm.set("lastName", values.lastName);
        myForm.set("email", values.email);
        myForm.set("phone", values.phone);
        myForm.set("state", values.state);
        myForm.set("company", values.company);
      },
    });

  return (
    <div className="p-5 md:p-10 bg-[#fff] rounded-md max-w-screen-md">
      <div>
        {/* change heading according to the place where form is used  */}
        <h1 className="text-lg leading-8">
          ‍Experience the difference with Archi and find out why it’s the
          perfect choice for home care registries.
        </h1>
      </div>
      <form className="mt-5 grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm" htmlFor="firstName">
            First name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onBlur={handleBlur}
            value={values.firstName}
            name="firstName"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
          {/* {errors.firstName && touched && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )} */}
        </div>
        <div>
          <label className="text-sm" htmlFor="lastName">
            Last name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onBlur={handleBlur}
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            onBlur={handleBlur}
            value={values.email}
            name="email"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="phone">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            onBlur={handleBlur}
            value={values.phone}
            name="phone"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="state">
            State<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onBlur={handleBlur}
            value={values.state}
            name="state"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="company">
            Company<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onBlur={handleBlur}
            value={values.company}
            name="company"
            onChange={handleChange}
            className="w-full mt-1 py-2 px-3 outline-none rounded-md focus:outline-none focus:ring-4 focus:ring-green-100 border border-green-300 transition-all duration-200"
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-[10px] w-full bg-primary hover:bg-[#6fd12de9] transition-all duration-200 rounded-md text-[#fff] my-6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

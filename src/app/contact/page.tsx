"use client";
import React from "react";
import { useFormik } from "formik";
import styles from "../../styles/contact/contact.module.css";

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const productForm = useFormik<MyFormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    },
    // validate: (values) => {
    //   const errors: Partial<MyFormValues> = {};

    //   if (!values.name) {
    //     errors.name = "First Name is required";
    //   }

    //   if (!values.description) {
    //     errors.description = "Last Name is required";
    //   }

    //   return errors;
    // },
  });
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black/50">
      <div className="text-center mb-16 ">
        <p className="text-7xl font-light text-white"> Contact Us </p>
        <p className="w-2/3  mx-auto text-white/75 text-xl font-light my-5 px-5">
          Got a quetion ? we'd love to hear from you . Send us a message <br />
          and will response as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-10">
          <form
            onSubmit={productForm.handleSubmit}
            className={styles.createProductsForm}
          >
            {/* tile product  Field */}
            <div className={styles.nameProduct__content}>
              <label htmlFor="name">full name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.nameProduct}
                value={productForm.values.name}
                placeholder="name ..."
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
              />
              {productForm.touched.name && productForm.errors.name ? (
                <div className="">{productForm.errors.name}</div>
              ) : null}
            </div>

            {/* description Field */}
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your emil ..."
                value={productForm.values.email}
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
              />
              {productForm.touched.email && productForm.errors.email ? (
                <div>{productForm.errors.email}</div>
              ) : null}
            </div>

            {/* message Field */}
            <div>
              <label htmlFor="message">Message:</label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <textarea
                cols={30}
                rows={5}
                id="message"
                name="message"
                placeholder="Enter your message ..."
                className="w-full p-3"
                value={productForm.values.message}
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
              />
              {/* {productForm.touched.message && productForm.errors.message ? (
                <div>{productForm.errors.message}</div>
              ) : null} */}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={productForm.isSubmitting}>
              Send Message
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

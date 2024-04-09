"use client";
import React from "react";
import { useFormik } from "formik";
import styles from "../../../../styles/p-admin/products.module.css";

interface MyFormValues {
  title: string;
  description: string;
}

const Products = () => {
  const productForm = useFormik<MyFormValues>({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    },
    validate: (values) => {
      const errors: Partial<MyFormValues> = {};

      if (!values.title) {
        errors.title = "First Name is required";
      }

      if (!values.description) {
        errors.description = "Last Name is required";
      }

      return errors;
    },
  });

  return (
    <div>
      {/* create products */}
      <div>
        <form onSubmit={productForm.handleSubmit} className={styles.createProductsForm}>
         
          {/* tile product  Field */}
          <div className={styles.titleProduct__content}>
            <label htmlFor="title" >title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.titleProduct}
              value={productForm.values.title}
              placeholder="product name ..."
              onChange={productForm.handleChange}
              onBlur={productForm.handleBlur}
            />
            {productForm.touched.title && productForm.errors.title ? (
              <div className="">{productForm.errors.title}</div>
            ) : null}
          </div>

          {/* description Field */}
          <div className={styles.descriptionProduct__content}>
            <label htmlFor="description">Last Name:</label>
            <input
              type="text"
              id="description"
              name="description"
              className={styles.descriptionProduct}
              placeholder="description product ..."
              value={productForm.values.description}
              onChange={productForm.handleChange}
              onBlur={productForm.handleBlur}
            />
            {productForm.touched.description &&
            productForm.errors.description ? (
              <div>{productForm.errors.description}</div>
            ) : null}
          </div>

          {/* Email Field */}
          {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={productForm.values.email} onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
          {productForm.touched.email && productForm.errors.email ? <div>{productForm.errors.email}</div> : null}
        </div> */}

          {/* Submit Button */}
          <button type="submit" disabled={productForm.isSubmitting}>
            create product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;

"use client";
import React from "react";
import { useFormik } from "formik";
import styles from "../../../../styles/p-admin/news.module.css";

interface MyFormValues {
  title: string;
  description: string;
}

const News = () => {
  const newsForm = useFormik<MyFormValues>({
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
      {/* create News */}
      <div>
        <form onSubmit={newsForm.handleSubmit} className={styles.createNewsForm}>
         
          {/* title News  Field */}
          <div className={styles.titleNews__content}>
            <label htmlFor="title" >title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.titleNews}
              value={newsForm.values.title}
              placeholder="News name ..."
              onChange={newsForm.handleChange}
              onBlur={newsForm.handleBlur}
            />
            {newsForm.touched.title && newsForm.errors.title ? (
              <div className="">{newsForm.errors.title}</div>
            ) : null}
          </div>

          {/* description Field */}
          <div className={styles.descriptionNews__content}>
            <label htmlFor="description">Last Name:</label>
            <input
              type="text"
              id="description"
              name="description"
              className={styles.descriptionNews}
              placeholder="description News ..."
              value={newsForm.values.description}
              onChange={newsForm.handleChange}
              onBlur={newsForm.handleBlur}
            />
            {newsForm.touched.description &&
            newsForm.errors.description ? (
              <div>{newsForm.errors.description}</div>
            ) : null}
          </div>

          {/* Email Field */}
          {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={newsForm.values.email} onChange={newsForm.handleChange} onBlur={newsForm.handleBlur} />
          {newsForm.touched.email && newsForm.errors.email ? <div>{newsForm.errors.email}</div> : null}
        </div> */}

          {/* Submit Button */}
          <button type="submit" disabled={newsForm.isSubmitting}>
            create News
          </button>
        </form>
      </div>
    </div>
  );
};

export default News;

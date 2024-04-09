"use client";
import React from "react";
import { useFormik } from "formik";
import styles from "../../../../styles/p-admin/article.module.css";

interface MyFormValues {
  title: string;
  description: string;
}

const Articles = () => {
  const ArticleForm = useFormik<MyFormValues>({
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
      {/* create Articles */}
      <div>
        <form onSubmit={ArticleForm.handleSubmit} className={styles.createArticlesForm}>
         
          {/* tile Article  Field */}
          <div className={styles.titleArticle__content}>
            <label htmlFor="title" >title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.titleArticle}
              value={ArticleForm.values.title}
              placeholder="Article name ..."
              onChange={ArticleForm.handleChange}
              onBlur={ArticleForm.handleBlur}
            />
            {ArticleForm.touched.title && ArticleForm.errors.title ? (
              <div className="">{ArticleForm.errors.title}</div>
            ) : null}
          </div>

          {/* description Field */}
          <div className={styles.descriptionArticle__content}>
            <label htmlFor="description">Last Name:</label>
            <input
              type="text"
              id="description"
              name="description"
              className={styles.descriptionArticle}
              placeholder="description Article ..."
              value={ArticleForm.values.description}
              onChange={ArticleForm.handleChange}
              onBlur={ArticleForm.handleBlur}
            />
            {ArticleForm.touched.description &&
            ArticleForm.errors.description ? (
              <div>{ArticleForm.errors.description}</div>
            ) : null}
          </div>

          {/* Email Field */}
          {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={ArticleForm.values.email} onChange={ArticleForm.handleChange} onBlur={ArticleForm.handleBlur} />
          {ArticleForm.touched.email && ArticleForm.errors.email ? <div>{ArticleForm.errors.email}</div> : null}
        </div> */}

          {/* Submit Button */}
          <button type="submit" disabled={ArticleForm.isSubmitting}>
            create Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default Articles;

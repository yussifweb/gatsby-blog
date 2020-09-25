import React from "react"
import Layout from "../components/layout";
import styles from './404.module.scss';

export default () => (
  <Layout>
  <div className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>
      The page you are looking for does not exists.
    </p>
  </div>
  </Layout>
)

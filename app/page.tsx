"use client";

import React from "react";
import Layout from "../components/Layout";
import styles from "./page.module.css";
import Chat from "./components/chat";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Chat />
      </div>
    </Layout>
  );
};

export default Home;
